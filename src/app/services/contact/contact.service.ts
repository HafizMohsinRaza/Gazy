import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) {}

  getContact(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateContact(bannerID: string, data: any): Observable<any> {
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.put<any>(updateUrl, data);
  }
}
