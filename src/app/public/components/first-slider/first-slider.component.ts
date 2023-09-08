import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banners/banners.service';

@Component({
  selector: 'app-first-slider',
  templateUrl: './first-slider.component.html',
  styleUrls: ['./first-slider.component.css']
})
export class FirstSliderComponent implements OnInit {
  selectedSlide = 0; 

  updateMainImage(selectedIndex: number) {
    this.selectedSlide = selectedIndex;
  }

  imgCollection: any[] = [];

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
    this.bannerService.getBanners().subscribe({
      next: (data) => {
        console.log(data)
        this.imgCollection = data.banners;
      },
      error: (error) => {
        console.error('Error fetching banners:', error);
      }
    });
    
  }

}
