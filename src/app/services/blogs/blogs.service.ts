import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:3000/api/blogs';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postBlog(data: any): Observable<any> {
    console.log('Post banner', data);
    return this.http.post<any>(this.apiUrl, data);
  }

  deleteBlog(bannerID: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateBlog(bannerID: string, data: FormData): Observable<any> {
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.put<any>(updateUrl, data);
  }
  updateImage(bannerID: string, data: FormData): Observable<any> {
    const updateUrl = `${this.apiUrl}/${bannerID}`;
    return this.http.post<any>(updateUrl, data);
  }
}
