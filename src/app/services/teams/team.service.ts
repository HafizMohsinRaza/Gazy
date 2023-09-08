import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:3000/api/teams';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postTeam(data: any): Observable<any> {
    console.log('Post Team', data);
    return this.http.post<any>(this.apiUrl, data);
  }

  deleteTeam(bannerID: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateImage(bannerID: string, data: FormData): Observable<any> {
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.post<any>(updateUrl, data);
  }
  updateTeam(bannerID: string, data: FormData): Observable<any> {
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.put<any>(updateUrl, data);
  }
}
