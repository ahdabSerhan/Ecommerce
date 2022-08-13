import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private url: string = "localhost:5000";

  constructor(private http: HttpClient) {}
  sendImage(image) {
    return this.http.post<boolean>(
      this.url + "/get_image?image=" + image,
      null
    );
  }
}
