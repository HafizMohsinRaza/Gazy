import { Component } from '@angular/core';
import { CenteredContainerService } from 'src/app/centered-container-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(private centeredContainerService: CenteredContainerService) {}
  
  show_cross_icon: boolean = false;
  openMenu() {
    this.show_cross_icon = !this.show_cross_icon;
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

 

  showCenteredContainer(): void {
    this.centeredContainerService.showContainer();
  }

}
