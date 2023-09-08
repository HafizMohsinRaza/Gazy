import { Component, HostListener, OnInit } from '@angular/core';
import { CenteredContainerService } from 'src/app/centered-container-service.service';
import { SeoService } from 'src/app/services/seo/seo.service';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  
  showScrollButton: boolean = false;

  constructor(private centeredContainerService: CenteredContainerService, private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle("Career");
    this.seoService.updateDescription("Career Page of Gaztron Company");
  }

  showCenteredContainer(positionTitle: string): void {
    this.centeredContainerService.showContainerPopup(true, positionTitle);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY >= 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
