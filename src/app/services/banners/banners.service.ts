import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private apiUrl = 'http://localhost:3000/api/banners';

  constructor(private http: HttpClient) {}

  getBanners(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postBanner(data: any): Observable<any> {
    console.log('Post banner', data);
    return this.http.post<any>(this.apiUrl, data);
  }

  deleteBanner(bannerID: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateImage(bannerID: string, data: FormData): Observable<any> {
    console.log("WORKING")
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.post<any>(updateUrl, data);
  }
  updateBanner(bannerID: string, data: FormData): Observable<any> {
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.put<any>(updateUrl, data);
  }
}
