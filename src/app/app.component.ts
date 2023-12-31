import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoAuthUser();
  }
  title = 'gaztron';

  isAdminPanelRoute(): boolean {
    return this.router.url.includes('/admin');
  }
}
