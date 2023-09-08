import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-air-dryer',
  templateUrl: './air-dryer.component.html',
  styleUrls: ['./air-dryer.component.css']
})
export class AirDryerComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("Air Dryer");
    this.seoService.updateDescription("Air Dryer a product of the Gaztron Company");
  }
  options: any = [
    {value: 'option-0', viewValue: 'Industrial Air Dryers'},
  ]
  generators = [
    { logo: 'assets/images/efficacy 2.png', name: 'Customizability' },
    { logo: 'assets/images/efficacy 12.png', name: 'Fully Automatic Plants' },
    { logo: 'assets/images/efficacy 5.png', name: 'Remote Monitoring' },
    {
      logo: 'assets/images/efficacy 8.png',
      name: 'Highly Skilled Technical Team',
    },
    {
      logo: 'assets/images/energy-saving.png',
      name: 'Efficient & Energy-Saving',
    },
    { logo: 'assets/images/efficacy 3.png', name: 'Reliability' },
  ];
  applications =[
    {
      title:'Heat Treatment Furnaces',
      image:'assets/images/application1.png',
    },
    {
      title:'Stainless Steel bright annealing',
      image:'assets/images/application2.png',
    },
    {
      title:'Carbon Steel bright annealing',
      image:'assets/images/application3.png',
    },
    {
      title:'Galvanizing',
      image:'assets/images/application4.png',
    },
    {
      title:'Reducing furnace atmosphere',
      image:'assets/images/application5.png',
    },
    {
      title:'Sintering',
      image:'assets/images/application6.png',
    },
    {
      title:'Automobile Industry',
      image:'assets/images/application7.png',
    },
    {
      title:'For Nitrogen Generation Plants',
      image:'assets/images/application8.png',
    },
    {
      title:'Pipe Manufacturing Industry',
      image:'assets/images/application9.png',
    },

  ]
}
