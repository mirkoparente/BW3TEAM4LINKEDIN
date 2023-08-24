import { Injectable } from "@angular/core";
import { Post, Profilo } from "../profilo";
import { Exp } from "../profilo";
import { addExp } from "../profilo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: 'root',
})
export class CardPrincipaleService {
  private appId: string = environment.appId;
  private apiUrl: string =
    'https://striveschool-api.herokuapp.com/api/profile/me';
  private apiUrlProfile: string =
    'https://striveschool-api.herokuapp.com/api/profile/';

  userId:string = "64e5f11609d5da00144d42a0"

  urlExperience: string = `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences`;

  urlPost:string=" https://striveschool-api.herokuapp.com/api/posts/"

  constructor(private http: HttpClient) {}

  get(): Observable<Profilo> {
    const headers = {
      Authorization: `Bearer ${this.appId}`,
    };

    return this.http.get<Profilo>(this.apiUrl, { headers });
  }
  getPost(): Observable<Post[]> {
    const headers = {
      Authorization: `Bearer ${this.appId}`,
    };

    return this.http.get<Post[]>(this.urlPost, { headers });
  }



  getAllProfile(): Observable<Profilo[]> {
    const headers = {
      Authorization: `Bearer ${this.appId}`,
    };

    return this.http.get<Profilo[]>(this.apiUrlProfile, { headers });
  }

  addExp(data: addExp): Observable<Exp> {
    return this.http.post<Exp>(this.urlExperience, data, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
      },
    });
  }

  getExp(): Observable<Exp[]> {
    return this.http.get<Exp[]>(this.urlExperience, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
      },
    });
  }

  getIdExp(expId:string){
    const urlUpdateExp=`https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences/${expId}`;
    return this.http.get<Exp>(urlUpdateExp, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
      },
    });
  }


  changeExp(data:addExp,expId:string){
    const urlUpdate=`https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences/${expId}`;
    return this.http.put<Exp>(urlUpdate, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
  }

  getIdProfile(userId: string) {
    const urlId: string = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;

    return this.http.get<Profilo>(urlId, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
      },
    });
  }


}
