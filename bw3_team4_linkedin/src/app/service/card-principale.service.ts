import { Injectable } from "@angular/core";
import { Profilo } from "../profilo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class CardPrincipaleService {
  private appId: string = environment.appId;
  private apiUrl: string =
    "https://striveschool-api.herokuapp.com/api/profile/me";
  private apiUrlProfile: string =
    "https://striveschool-api.herokuapp.com/api/profile/";

  constructor(private http: HttpClient) {}

  get(): Observable<Profilo> {
    const headers = {
      Authorization: `Bearer ${this.appId}`,
    };

    return this.http.get<Profilo>(this.apiUrl, { headers });
  }

  getAllProfile(): Observable<Profilo[]> {
    const headers = {
      Authorization: `Bearer ${this.appId}`,
    };

    return this.http.get<Profilo[]>(this.apiUrlProfile, { headers });
  }
}
