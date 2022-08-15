import { Injectable } from "@angular/core";
import { linearMeasurements } from "../interface/ec-template.interface";
interface Point {
  x: number;
  y: number;
}
@Injectable({
  providedIn: "root",
})
export class MeasurementsService {
  constructor() {}

  //R = ratio that defines distance in centimeter(cm) in 1 pixel which is calculated as:
  //R=H/L H= actual height of person - L= length calculated between point 0 and right ankle point
}
