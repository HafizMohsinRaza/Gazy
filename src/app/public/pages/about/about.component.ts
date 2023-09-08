import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("About Us");
    this.seoService.updateDescription("About Us Page of Gaztron Company");
  }
  
  options: any = [
    {value: 'option-0', viewValue: 'PSA Nitrogen Generation Plant'},
    {value: 'option-1', viewValue: 'PSA Oxygen Generation Plant'},
    {value: 'option-2', viewValue: 'Ammonia Cracking Purifier Unit'},
  ]
  generators = [
    {
      logo: 'assets/images/efficacy 1.png',
      name: 'Efficient & Robust Perfomance',
    },
    { logo: 'assets/images/efficacy 2.png', name: 'Customizability' },
    { logo: 'assets/images/efficacy 3.png', name: 'Reliability' },
    { logo: 'assets/images/efficacy 4.png', name: 'Simple Installation' },
    { logo: 'assets/images/efficacy 5.png', name: 'Remote Monitoring' },
    { logo: 'assets/images/efficacy 6.png', name: 'High Profile Customers' },
    { logo: 'assets/images/efficacy 7.png', name: 'Lowest Energy Consumption' },
    {
      logo: 'assets/images/efficacy 8.png',
      name: 'Highly Skilled Technical Team',
    },
    {
      logo: 'assets/images/efficacy 9.png',
      name: 'International Certification',
    },
    { logo: 'assets/images/efficacy 10.png', name: 'After Sale Service' },
    {
      logo: 'assets/images/efficacy 11.png',
      name: 'Own Manufacturing Facility',
    },
    { logo: 'assets/images/efficacy 12.png', name: 'Fully Automatic Plants' },
  ];
}
