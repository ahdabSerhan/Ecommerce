import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable, Subscription } from "rxjs";
// import { DeviceDetectorService } from "ngx-device-detector";

import { ApiService } from "src/app/services/api.service";
@Component({
  selector: "app-video-record",
  templateUrl: "./video-record.component.html",
  styleUrls: ["./video-record.component.scss"],
})
export class VideoRecordComponent implements OnInit {
  @ViewChild("video") //variable from html
  public video: ElementRef;

  @ViewChild("canvas") //variable from html
  @Input()
  events: Observable<void>;
  private eventsSubscription: Subscription;

  public canvas: ElementRef;
  public deviceInfo = null;
  public captures: Array<any>;
  private imageSrc: string = "";
  videoW = 480;
  videoH = 480;
  public constructor(private apiService: ApiService) {
    this.getDevice();
    this.captures = [];
  }

  public ngOnInit() {}

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          this.eventsSubscription = this.events.subscribe(() =>
            this.stopVideo(stream)
          );
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          setInterval(() => {
            if (this.captures.length < 10) {
              // this.sendPhoto(this.capture());
            } else {
              this.stopVideo(stream);
            }
          }, 2000);
        })
        .catch((err) => alert(`Bummer! ${err.name}.`));
    }
  }
  getDevice(): string {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.videoW = 200;
      this.videoH = 200;
      return "mobile";
    }

    return this.getBrowserName();
  }
  stopVideo(stream) {
    let tracks = stream.getTracks();
    // now close each track by having forEach loop
    tracks.forEach(function (track) {
      // stopping every track
      track.stop();
    });
    // assign null to srcObject of video
    this.video.nativeElement.srcObject = null;
  }
  getBrowserName(): string {
    const agent = window.navigator.userAgent.toLowerCase();
    const browser =
      agent.indexOf("edge") > -1
        ? "Microsoft Edge"
        : agent.indexOf("edg") > -1
        ? "Chromium-based Edge"
        : agent.indexOf("opr") > -1
        ? "Opera"
        : agent.indexOf("chrome") > -1
        ? "Chrome"
        : agent.indexOf("trident") > -1
        ? "Internet Explorer"
        : agent.indexOf("firefox") > -1
        ? "Firefox"
        : agent.indexOf("safari") > -1
        ? "Safari"
        : "other";

    return browser;
  }
  capture() {
    const context = this.canvas.nativeElement
      .getContext("2d")
      .drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    return this.canvas.nativeElement.toDataURL("image/png");
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert("invalid format");
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
  }
  sendPhoto(image) {
    this.apiService.sendImage(image).subscribe((res) => {
      alert("Uploaded Successfully.");
    });
  }
}
