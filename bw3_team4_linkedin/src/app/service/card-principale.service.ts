import { Injectable } from "@angular/core";
import { Profilo } from "../profilo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CardPrincipaleService {
  private: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMTA1ZDFmMTc1YzAwMTRjNTU4YjgiLCJpYXQiOjE2OTI2MDI0NjEsImV4cCI6MTY5MzgxMjA2MX0.CxhRUk0nr8NyazZ_qzLiJx0pw_0O2Km8Y8SZMURZwZA";
  //
  url: string = "https://striveschool-api.herokuapp.com/api/profile/me";
  urlAllProfile: string = "https://striveschool-api.herokuapp.com/api/profile/";

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get<Profilo>(this.url, {
      headers: {
        Authorization: `Bearer ${this.private}`,
      },
    });
  }

  getAllProfile() {
    return this.http.get<Profilo[]>(this.urlAllProfile, {
      headers: {
        Authorization: `Bearer ${this.private}`,
      },
    });
  }
}
