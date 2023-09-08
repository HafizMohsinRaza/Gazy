import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'http://localhost:3000/api/quotes';

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postQuote(data: any): Observable<any> {
    console.log('Post banner', data);
    return this.http.post<any>(this.apiUrl, data);
  }

  deleteQuote(bannerID: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateQuote(bannerID: string, data: FormData): Observable<any> {
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.post<any>(updateUrl, data);
  }
}
