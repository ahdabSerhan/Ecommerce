interface LinearMeasurements {
  sleeveLength: number;
  totalHight: number;
  sholderToWaistFront: number;
  sholdersX: number;
}
interface Point {
  x: number;
  y: number;
  z?: number;
}
interface CircularMeasurements {}
const pi = 3.14159;

export class BodyMeasurements {
  linear: LinearMeasurements;
  circular: CircularMeasurements;
  r: number;
  bodyShape: string = "";
  constructor(public height, public keyPoints) {
    console.log("key points :", keyPoints);
    let length = keyPoints.length;
    this.r = getRatio(
      height,
      keyPoints[0]["position"],
      keyPoints[length - 1]["position"]
    );
  }
  getBodyShape(bust, hips, waist, highHipSize) {
    if (
      (bust - hips <= 1 && hips - bust < 3.6 && bust - waist >= 9) ||
      bust - waist >= 10
    )
      this.bodyShape = "Hourglass";
    else if (
      hips - bust >= 3.6 &&
      hips - bust < 10 &&
      hips - waist >= 9 &&
      highHipSize / waist < 1.191
    )
      this.bodyShape = "Bottom hourglass";
    else if (bust - hips > 1 && bust - hips < 10 && bust - waist >= 9)
      this.bodyShape = "Top hourglass";
    else if (
      hips - bust > 2 &&
      hips - waist >= 7 &&
      highHipSize / waist >= 1.193
    )
      this.bodyShape = "Spoon";
    else if (hips - bust >= 3.6 && hips - waist < 9)
      this.bodyShape = "Triangle";
    else if (bust - hips >= 3.6 && bust - waist < 9)
      this.bodyShape = "Inverted triangle"; // the same as Apple
    else if (
      hips - bust < 3.6 &&
      bust - hips < 3.6 &&
      bust - waist < 9 &&
      hips - waist < 10
    )
      this.bodyShape = "Rectangle";
    return this.bodyShape;
  }
  getShapeType(bust, waist, hips) {
    var bustMeasure = "";
    var waistMeasure = "";
    var hipsMeasure = "";

    var small = "small";
    var medium = "medium";
    var large = "large";

    var shapeType = "";

    // Bust Calculation.
    if (bust <= 36) {
      bustMeasure = small;
    }
    if (bust <= 44) {
      bustMeasure = medium;
    }
    if (bust >= 45) {
      bustMeasure = large;
    }
    // Waist Calculation.
    if (waist <= 34) {
      waistMeasure = small;
    }
    if (waist <= 41) {
      waistMeasure = medium;
    }
    if (waist >= 42) {
      waistMeasure = large;
    }

    // Hips Calculation.
    if (hips <= 39) {
      hipsMeasure = small;
    }
    if (hips <= 47) {
      hipsMeasure = medium;
    }
    if (hips >= 48) {
      hipsMeasure = large;
    }

    // First check to see if all measurements are within 5" of each other.  If so they are I-shape.
    var highestValue = Math.max(bust, waist, hips);
    var lowestValue = Math.min(bust, waist, hips);
    var difference = highestValue - lowestValue;

    if (difference <= 5) {
      shapeType = "I-Shape";
    }
    /*
              Bust is >5" smaller than waist & hips       THEN    A-shape (A-shape)
              Waist is >5" smaller than bust & hips       THEN    X-shape (X-shape)
              Waist is >5" bigger than bust & hips        THEN    V-shape (V-shape)
              Hips are >5" bigger bust & waist            THEN    A-shape (A-shape)
          */

    if (waist - bust > 5 && hips - bust > 5) {
      shapeType = "A-shape";
    }

    if (bust - waist > 5 && hips - waist > 5) {
      shapeType = "X-shape";
    }
    if (waist - bust > 5 && waist - hips > 5) {
      shapeType = "V-shape";
    }
    if (hips - waist > 5 && hips - bust > 5) {
      shapeType = "A-shape";
    }
    // Bust measurements are more than 5 percent bigger than your hip measurement.
    if (bust - hips > hips / 20) {
      shapeType = "V-shape";
    }
    // Bust and hip measurements are within 5 percent of each other. (bust - hips < ( hips / 20))
    // And Waist is less than 25 percent smaller than chest measurements && (waist < (bust * .75))
    if (bust - hips <= hips / 20 && waist > bust * 0.75) {
      shapeType = "I-shape";
    }
    // Hip measurement is more than 5 percent bigger than your shoulder or bust measurements
    if (hips - bust > bust / 20) {
      shapeType = "A-shape";
    }
    return shapeType;
  }
  setBodyMeasurements() {
    let fullBody = new BodyMeasurements(this.height, this.keyPoints);
    let linear: LinearMeasurements = {
      sleeveLength: 0,
      totalHight: 0,
      sholderToWaistFront: 0,
      sholdersX: 0,
    };
    //(distance(lrft elbow,left sholder))+(distance(left elbow,left waist)
    linear.sleeveLength =
      (getDistance(
        this.keyPoints[4]["position"],
        this.keyPoints[6]["position"]
      ) +
        getDistance(
          this.keyPoints[4]["position"],
          this.keyPoints[8]["position"]
        )) *
        this.r +
      4.04;

    linear.totalHight = getDistance(
      this.keyPoints[0]["position"],
      this.keyPoints[this.keyPoints.length - 1]["position"]
    );
    linear.sholderToWaistFront = getDistance(
      this.keyPoints[4]["position"],
      this.keyPoints[10]["position"]
    );
    linear.sholdersX =
      getDistance(
        this.keyPoints[4]["position"],
        this.keyPoints[5]["position"]
      ) *
        this.r +
      5.81;
    fullBody.linear = linear;
    console.log("full body ", fullBody);
    return fullBody;
  }
}
function getRatio(height: number, p1, p2) {
  //get distance between point 0 and last point- the right ankle
  return height / getDistance(p1, p2);
}

function getDistance(p1: Point, p2: Point) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
function getBust() {}
function getHips() {}
function getWaist() {}
function cmToInch(cmValue) {
  return 0.393701 * cmValue;
}
function getHighHipSize() {}


