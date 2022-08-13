import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RenderService } from "./render.service";

@Component({
  selector: "app-render-obj",
  templateUrl: "./render-obj.component.html",
  styleUrls: ["./render-obj.component.scss"],
})
export class RenderObjComponent implements OnInit {
  @ViewChild("rendererCanvas")
  public rendererCanvas: ElementRef<HTMLCanvasElement>;
  public constructor(private renderService: RenderService) {}

  public ngOnInit(): void {
    this.renderService.createScene(this.rendererCanvas);
    this.renderService.animate();
  }
}
