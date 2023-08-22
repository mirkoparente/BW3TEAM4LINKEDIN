import { Injectable } from '@angular/core';
import { Profilo } from '../profilo';
import { Exp } from '../profilo';
import { addExp } from '../profilo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CardPrincipaleService {
  private appId: string = environment.appId;
  private apiUrl: string =
    'https://striveschool-api.herokuapp.com/api/profile/me';
  private apiUrlProfile: string =
    'https://striveschool-api.herokuapp.com/api/profile/';

  userId: string = '64e3105d1f175c0014c558b8';

  urlExperience: string = `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences`;

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
}
