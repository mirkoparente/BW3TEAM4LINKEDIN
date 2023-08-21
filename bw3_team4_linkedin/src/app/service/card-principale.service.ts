import { Injectable } from "@angular/core";
import { Profilo } from "../profilo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CardPrincipaleService {
  private: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMWM3ZjFmMTc1YzAwMTRjNTU4ZDciLCJpYXQiOjE2OTI2MDU1NjcsImV4cCI6MTY5MzgxNTE2N30.iB6sHtZ5ERjTOYyQvNrYcTuTdMFE2NxTEYq8shm10l8";
  //
  url: string = "https://striveschool-api.herokuapp.com/api/profile/me";
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get<Profilo>(this.url, {
      headers: {
        Authorization: `Bearer ${this.private}`,
      },
    });
  }
}
