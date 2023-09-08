import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

interface SideNavToggle{
  screenwidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy{
  userIsAuthentcated = false;
  private authSubs: Subscription | undefined;
  constructor(private auth:AuthService,private router:Router) { }
  ngOnInit() {
    // this.authSubs = this.auth.getAuthStatusListener().subscribe(
    //   isAuthenticated => {
    //     this.userIsAuthentcated = isAuthenticated;
    //   }
    // );
  }
  ngOnDestroy() {
    // this.authSubs?.unsubscribe();
  }
  logout(){
    this.auth.logout();
    // this.router.navigate(['admin/account/login']);
  }
  isSideNavCollapsed = false;
  screenwidth =0 ;
  onToggleSideNav(data:SideNavToggle){
    this.isSideNavCollapsed = data.collapsed;
    this.screenwidth = data.screenwidth;
  }
}
