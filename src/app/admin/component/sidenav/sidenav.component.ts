import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { navItems } from './navdata';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { INavItem } from './helper';

interface SideNavToggle {
  screenwidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Output() onToggle: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenwidth = 0;
  navItems = navItems;
  multiple:boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenwidth = event.target.innerWidth;
    if (this.screenwidth <= 768) {
      this.collapsed = false;
      this.onToggle.emit({
        screenwidth: this.screenwidth,
        collapsed: this.collapsed,
      });
    }
  }

  ngOnInit(): void {
    this.screenwidth = window.innerWidth;
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggle.emit({
      screenwidth: this.screenwidth,
      collapsed: this.collapsed,
    });
  }
  closesidenav(): void {
    this.collapsed = false;
    this.onToggle.emit({
      screenwidth: this.screenwidth,
      collapsed: this.collapsed,
    });
  }


  handleClick(item: INavItem) {
    if(!this.multiple){
      for(let modelItems of this.navItems){
        if(item !== modelItems && modelItems.expanded){
          modelItems.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }

  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['admin/account/login']);
  }
}
