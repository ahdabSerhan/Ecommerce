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

export class BodyMeasurements {
  linear: LinearMeasurements;
  circular: CircularMeasurements;
  constructor(public height, public keyPoints) {
    let length = keyPoints.length;
    getRatio(
      height,
      keyPoints[0]["position"],
      keyPoints[length - 1]["position"]
    );
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
      getDistance(
        this.keyPoints[4]["position"],
        this.keyPoints[6]["position"]
      ) +
      getDistance(this.keyPoints[4]["position"], this.keyPoints[8]["position"]);

    linear.totalHight = getDistance(
      this.keyPoints[0]["position"],
      this.keyPoints[this.keyPoints.length - 1]["position"]
    );
    linear.sholderToWaistFront = getDistance(
      this.keyPoints[4]["position"],
      this.keyPoints[10]["position"]
    );
    linear.sholdersX = getDistance(
      this.keyPoints[4]["position"],
      this.keyPoints[5]["position"]
    );
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
