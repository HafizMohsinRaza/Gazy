import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-nav-hydrogen',
  templateUrl: './nav-hydrogen.component.html',
  styleUrls: ['./nav-hydrogen.component.css'],
})
export class NavHydrogenComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("Hydrogen Plant");
    this.seoService.updateDescription("Hydrogen Plant a product of the Gaztron Company");
  }
  options: any = [
    {value: 'option-0', viewValue: 'Ammonia Cracker Unit'},
    {value: 'option-1', viewValue: 'Pure Hydrogen Generator Plant'},
    {value: 'option-2', viewValue: 'Ammonia Cracking Purifier Unit'},
  ]
  models: any = [
    {
      title: 'Ammonia Cracker Unit',
      image: 'assets/images/ammonia1.png',
    },
    {
      title: 'Ammonia Cracking Purifier Unit',
      image: 'assets/images/ammonia2.png',
    },
  ];

  tableHeadings: any = [
    'Technical Deatils',
    'GAZ-NH3-05',
    'GAZ-NH3-10',
    'GAZ-NH3-20',
    'GAZ-NH3-30',
  ];
  tableContent: any = [
    {
      column1: 'Flow Range',
      column2: '0 - 5 NM3/HR',
      column3: '6 - 10 NM3/HR',
      column4: '11 - 20 NM3/HR',
      column5: '21 - 50 NM3/HR',
    },
    {
      column1: 'Cracked Gas Purity',
      column2: '75% H2 & 25% N2',
      column3: '75% H2 & 25% N2',
      column4: '75% H2 & 25% N2',
      column5: '75% H2 & 25% N2',
    },
    {
      column1: 'Hydrogen - High Purity',
      column2: '99%',
      column3: '99%',
      column4: '99%',
      column5: '99%',
    },
    {
      column1: 'Dew Point',
      column2: '-80°C',
      column3: '-80°C',
      column4: '-80°C',
      column5: '-80°C',
    },

    {
      column1: 'Pressure',
      column2: '1 kg/cm2 - 5 kg/cm2',
      column3: '1 kg/cm2 - 5 kg/cm2',
      column4: '1 kg/cm2 - 5 kg/cm2',
      column5: '1 kg/cm2 - 5 kg/cm2',
    },
  ];
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
  applications = [
    {
      title: 'Heat Treatment Furnaces',
      image: 'assets/images/application1.png',
    },
    {
      title: 'Stainless Steel bright annealing',
      image: 'assets/images/application2.png',
    },
    {
      title: 'Carbon Steel bright annealing',
      image: 'assets/images/application3.png',
    },
    {
      title: 'Galvanizing',
      image: 'assets/images/application4.png',
    },
    {
      title: 'Reducing furnace atmosphere',
      image: 'assets/images/application5.png',
    },
    {
      title: 'Sintering',
      image: 'assets/images/application6.png',
    },
    {
      title: 'Automobile Industry',
      image: 'assets/images/application7.png',
    },
    {
      title: 'For Nitrogen Generation Plants',
      image: 'assets/images/application8.png',
    },
    {
      title: 'Pipe Manufacturing Industry',
      image: 'assets/images/application9.png',
    },
  ];
}
