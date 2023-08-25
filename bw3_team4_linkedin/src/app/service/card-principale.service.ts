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
  // get profili
  get(): Observable<Profilo> {
    const headers = {
      Authorization: `Bearer ${this.appId}`,
    };

    return this.http.get<Profilo>(this.apiUrl, { headers });
  }
  //get dei post
  getPost(): Observable<Post[]> {
    const headers = {
      Authorization: `Bearer ${this.appId}`,
    };

    return this.http.get<Post[]>(this.urlPost, { headers });
  }
  addPost(post: Partial<Post>): Observable<Post> {
    const headers = {
      Authorization: `Bearer ${this.appId}`,
    };
    return this.http.post<Post>(this.urlPost, post, { headers });
  }

  getAllProfile(): Observable<Profilo[]> {
    const headers = {
      Authorization: `Bearer ${this.appId}`,
    };

    return this.http.get<Profilo[]>(this.apiUrlProfile, { headers });
  }

  //aggiunta esperienza
  addExp(data: addExp): Observable<Exp> {
    return this.http.post<Exp>(this.urlExperience, data, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
      },
    });
  }
  //get tutte esperienze
  getExp(): Observable<Exp[]> {
    return this.http.get<Exp[]>(this.urlExperience, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
      },
    });
  }
  //get id delle esperienze
  getIdExp(expId: string) {
    const urlUpdateExp = `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences/${expId}`;
    return this.http.get<Exp>(urlUpdateExp, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
      },
    });
  }

  //modifica delle esperienze
  changeExp(data: addExp, expId: string): Observable<Exp> {
    const urlUpdate = `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences/${expId}`;
    return this.http.put<Exp>(urlUpdate, data, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
        "Content-Type": "application/json",
      },
    });
  }
  //elimina esperienza
  deleteExp(expId: string){
    const urlUpdate = `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences/${expId}`;
    return this.http.delete(urlUpdate, {
      responseType: "text",
      headers: {
        Authorization: `Bearer ${this.appId}`,
      },
    });
  }
  //get id dei profili
  getIdProfile(userId: string) {
    const urlId: string = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;

    return this.http.get<Profilo>(urlId, {
      headers: {
        Authorization: `Bearer ${this.appId}`,
      },
    });
  }

  //CHIAMATE COMMENTI
  getComment(id: string): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.urlCommenti + id, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmEzMmFkMjQ5NzAwMTQ2OTM2OTUiLCJpYXQiOjE2OTI4NzEyMTksImV4cCI6MTY5NDA4MDgxOX0.jZp_Lo_t3nFLECVAtZU1RiJDq8mQlNIt2MCDEfPxsT8"}`,
      },
    });
  }

  postComment(body: any): Observable<Comments[]> {
    return this.http.post<Comments[]>(this.urlCommenti, body, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmEzMmFkMjQ5NzAwMTQ2OTM2OTUiLCJpYXQiOjE2OTI4NzEyMTksImV4cCI6MTY5NDA4MDgxOX0.jZp_Lo_t3nFLECVAtZU1RiJDq8mQlNIt2MCDEfPxsT8"}`,
      },
    });
  }

  deleteComment(id: string): Observable<Comments> {
    return this.http.delete<Comments>(this.urlCommenti + id, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmEzMmFkMjQ5NzAwMTQ2OTM2OTUiLCJpYXQiOjE2OTI4NzEyMTksImV4cCI6MTY5NDA4MDgxOX0.jZp_Lo_t3nFLECVAtZU1RiJDq8mQlNIt2MCDEfPxsT8"}`,
      },
    });
  }
}
