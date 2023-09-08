import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-multislider',
  templateUrl: './multislider.component.html',
  styleUrls: ['./multislider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MultisliderComponent{

  brands = [
    {
      image: 'assets/images/p2.png',
    },
    {
      image: 'assets/images/p3.png',
    },
    {
      image: 'assets/images/p4.png',
    },
    {
      image: 'assets/images/p5.png',
    },
    {
      image: 'assets/images/p6.png',
    },
    {
      image: 'assets/images/p7.png',
    },
    {
      image: 'assets/images/p9.png',
    },
    {
      image: 'assets/images/p10.png',
    },
    {
      image: 'assets/images/p11.png',
    },
    { image: 'assets/images/p12.png' },
    { image: 'assets/images/p13.png' },
    { image: 'assets/images/p14.png' },
    { image: 'assets/images/p15.png' },
    { image: 'assets/images/p16.png' },
    { image: 'assets/images/p17.png' },
    { image: 'assets/images/p18.png' },
    { image: 'assets/images/p19.png' },
    { image: 'assets/images/p20.png' },
    { image: 'assets/images/p21.png' },
    { image: 'assets/images/p23.png' },
    { image: 'assets/images/p24.png' },
    { image: 'assets/images/p25.png' },
    { image: 'assets/images/p26.png' },
    { image: 'assets/images/p27.png' },
    { image: 'assets/images/p28.png' },
    { image: 'assets/images/p29.png' },
    { image: 'assets/images/p30.png' },
    { image: 'assets/images/p31.png' },
    { image: 'assets/images/p32.png' },
    { image: 'assets/images/p33.png' },
    { image: 'assets/images/p34.png' },
    { image: 'assets/images/p35.png' },
    { image: 'assets/images/p36.png' },
    { image: 'assets/images/p37.png' },
    { image: 'assets/images/p38.png' },
  ];

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1300px',
          numVisible: 5,
          numScroll: 5
      },
      {
          breakpoint: '1199px',
          numVisible: 4,
          numScroll: 3
      },
      {
          breakpoint: '991px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '500px',
          numVisible: 1,
          numScroll: 1
      },

    ];
  }
}
