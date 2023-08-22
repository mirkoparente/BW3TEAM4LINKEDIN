import { Injectable } from "@angular/core";
import { Exp, Profilo, addExp } from "../profilo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class CardPrincipaleService {
  private: string ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMTA1ZDFmMTc1YzAwMTRjNTU4YjgiLCJpYXQiOjE2OTI2MDI0NjEsImV4cCI6MTY5MzgxMjA2MX0.CxhRUk0nr8NyazZ_qzLiJx0pw_0O2Km8Y8SZMURZwZA"
  //
  url: string = "https://striveschool-api.herokuapp.com/api/profile/me";
  urlAllProfile: string = 'https://striveschool-api.herokuapp.com/api/profile/'

  userId:string = "64e3105d1f175c0014c558b8"

  urlExperience:string=`https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences`
  private appId: string = environment.appId;
  private apiUrl: string =
    "https://striveschool-api.herokuapp.com/api/profile/me";
  private apiUrlProfile: string =
    "https://striveschool-api.herokuapp.com/api/profile/";

  constructor(private http: HttpClient) {}

  get(): Observable<Profilo> {
    return this.http.get<Profilo>(this.url, {
      headers: {
        Authorization: `Bearer ${this.private}`,
      },
    });
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

  getExp(): Observable<Exp[]> {
    return this.http.get<Exp[]>(this.urlExperience, {
      headers: {
        Authorization: `Bearer ${this.private}`,
      },
  });
}

addExp(data:addExp): Observable<Exp>{
  return this.http.post<Exp>(this.urlExperience,data,{
    headers: {
      Authorization: `Bearer ${this.private}`,
    },
});
}
}
