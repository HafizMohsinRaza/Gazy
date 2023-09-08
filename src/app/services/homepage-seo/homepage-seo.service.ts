import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageSeoService {
  private apiUrl = 'http://localhost:3000/api/seo';

  constructor(private http: HttpClient) {}

  getSeos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postSeo(data: any): Observable<any> {
    console.log('Post banner', data);
    return this.http.post<any>(this.apiUrl, data);
  }

  deleteSeo(bannerID: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateSeo(bannerID: string, data: any): Observable<any> {
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.put<any>(updateUrl, data);
  }
}
