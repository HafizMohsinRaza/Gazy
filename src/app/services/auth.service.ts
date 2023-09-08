import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, delay, of, tap } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';
  private isAuthenticated = false;
  private loginRequestCheck = false;
  private tokenTimer: any;
  private authStatus = new Subject<boolean>();
  constructor(private router: Router,private http: HttpClient){}

  createUser(email: string, password: string){
    const authData: AuthData = {
      email: email, password: password
    }
    this.http.post("http://localhost:3000/api/user/signup", authData)
    .subscribe(response => {
      console.log(response);
    })
  }
  login(email:string, password:string){
    this.loginRequestCheck = true;
    const authData: AuthData = {
      email: email, password: password
    }
    this.http.post<{token: string, expiresIn: number}>("http://localhost:3000/api/user/login", authData)
    .subscribe(response => {
      const token = response.token;
      if(token) {
        const expireInDuration = response.expiresIn;
        this.setAuthTimer(expireInDuration);
        this.token = token;
      this.authStatus.next(true);
      this.isAuthenticated = true;
      const now = new Date();
      const expirationDate = new Date(now.getTime() +  60 * 60 * 1000)
      this.saveAuthData(token,expirationDate);
      this.router.navigate(['admin/dashboard']);
      }
    })
  }
  loginRequest(){
    return this.loginRequestCheck;
  }
  getIsAuth() {
    return this.isAuthenticated;
  }
  getToken() {
    return this.token;
  }
  getAuthStatusListener(){
    return this.authStatus.asObservable();
  }

  autoAuthUser(){
    const authInformation = this.getAuthData();
    const now = new Date();
    if(!authInformation){
      return;
    }

      const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
      if(expiresIn > 0){
        this.token = authInformation?.token ?? '';
        this.isAuthenticated = true;
        this.authStatus.next(true);
        this.setAuthTimer(expiresIn / 1000)
      }
    
  }
  private setAuthTimer(duration: number) {
    console.log("Timer" + duration)
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000)
  }
  private getAuthData(){
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !expirationDate){
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }
  logout(){
    this.token = '';
    this.authStatus.next(false);
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
    this.router.navigate(['admin/account/login']);
  }
  private saveAuthData(token: string, expirationDate:Date){
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }
  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }
}
