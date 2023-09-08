import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private apiUrl = 'http://localhost:3000/api/about';

  constructor(private http: HttpClient) {}

  getAbout(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postAbout(data: any): Observable<any> {
    console.log('Post banner', data);
    return this.http.post<any>(this.apiUrl, data);
  }

  deleteAbout(bannerID: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateImage(bannerID: string, data: FormData): Observable<any> {
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.post<any>(updateUrl, data);
  }
  updateAbout(bannerID: string, data: FormData): Observable<any> {
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.put<any>(updateUrl, data);
  }
}
