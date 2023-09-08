import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndustriesComponent {
  brands = [
    { image: 'assets/images/industry.png' },
    { image: 'assets/images/industry.png' },
    { image: 'assets/images/industry.png' },
    { image: 'assets/images/industry.png' },
    { image: 'assets/images/industry.png' },
    { image: 'assets/images/industry.png' },
    { image: 'assets/images/industry.png' },
  ];

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [

      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }

    ];
  }
}
