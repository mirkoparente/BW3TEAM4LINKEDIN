import { Injectable } from "@angular/core";
import { Comments, Post, Profilo } from "../profilo";
import { Exp } from "../profilo";
import { addExp } from "../profilo";
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

  userId: string = "64e5f11609d5da00144d42a0";

  urlExperience: string = `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences`;

  urlPost: string = " https://striveschool-api.herokuapp.com/api/posts/";

  urlCommenti: string = "https://striveschool-api.herokuapp.com/api/comments/";
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

  getIdProfile(userId: string) {
    const urlId: string = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;

    return this.http.get<Profilo>(urlId, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
      },
    });
  }

  //CHIAMATE COMMENTI
  getComment(id: string) {
    return this.http.get<Comment[]>(this.urlCommenti + ":" + id, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmEzMmFkMjQ5NzAwMTQ2OTM2OTUiLCJpYXQiOjE2OTI4NzEyMTksImV4cCI6MTY5NDA4MDgxOX0.jZp_Lo_t3nFLECVAtZU1RiJDq8mQlNIt2MCDEfPxsT8"}`,
      },
    });
  }

  postComment(body: any): Observable<Comments> {
    return this.http.post<Comments>(this.urlCommenti, body, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmEzMmFkMjQ5NzAwMTQ2OTM2OTUiLCJpYXQiOjE2OTI4NzEyMTksImV4cCI6MTY5NDA4MDgxOX0.jZp_Lo_t3nFLECVAtZU1RiJDq8mQlNIt2MCDEfPxsT8"}`,
      },
    });
  }

  deleteComment(): Observable<Comments> {
    return this.http.delete<Comments>(this.urlCommenti, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmEzMmFkMjQ5NzAwMTQ2OTM2OTUiLCJpYXQiOjE2OTI4NzEyMTksImV4cCI6MTY5NDA4MDgxOX0.jZp_Lo_t3nFLECVAtZU1RiJDq8mQlNIt2MCDEfPxsT8"}`,
      },
    });
  }
}
