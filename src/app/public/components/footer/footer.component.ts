import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  constructor() { }



  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // This will automatically scroll to the top when a new route is navigated to.
  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.scrollToTop();
  }

  @HostListener('window:unload', ['$event'])
  unloadNotification($event: any) {
    this.scrollToTop();
  }
}
