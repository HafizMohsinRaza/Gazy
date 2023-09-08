import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-cryogenic-asu',
  templateUrl: './cryogenic-asu.component.html',
  styleUrls: ['./cryogenic-asu.component.css'],
})
export class CryogenicAsuComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("Cryogenic ASU");
    this.seoService.updateDescription("Cryogenic ASU a product of the Gaztron Company");
  }
  options: any = [
    {value: 'option-0', viewValue: 'Cryogenic Air Separation Gas Plants'},
  ]
  tableAsuHeadings: any = [
    'Product Description',
    'Flow (NM3/HR)',
    'Purity',
    'Pressure (MPaG)',
    'Pressure (After Booster)',
  ];
  tableAsuContent: any = [
    {
      column1: 'Gases Oxygen (GOX)',
      column2: '500 - 1500',
      column3: '10ppm(O2)',
      column4: '0.01/0.2',
      column5: 'Up to 140 Kg/cm2',
    },
    {
      column1: 'Liquid Oxygen (LOX)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },
    {
      column1: 'Gases Nitrogen (GN)',
      column2: '500 - 3000',
      column3: '>99.6%(O2)',
      column4: '0.02/0.02',
      column5: 'Up to 140 Kg/cm2',
    },
    {
      column1: 'Liquid Nitrogen (LN)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },

    {
      column1: 'Liquid Argon (LAR)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },
  ];
  tableAspHeadings: any = [
    'Product Description',
    'Flow (NM3/HR)',
    'Purity',
    'Pressure (MPaG)',
    'Pressure (After Booster)',
  ];
  tableAspContent: any = [
    {
      column1: 'Gases Oxygen (GOX)',
      column2: '170 - 500',
      column3: '10ppm(O2)',
      column4: '0.01/0.2',
      column5: 'Up to 140 Kg/cm2',
    },
    {
      column1: 'Liquid Oxygen (LOX)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },
    {
      column1: 'Gases Nitrogen (GN)',
      column2: '350 - 1000',
      column3: '>99.6%(O2)',
      column4: '0.02/0.02',
      column5: 'Up to 140 Kg/cm2',
    },
    {
      column1: 'Liquid Nitrogen (LN)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },

    {
      column1: 'Liquid Argon (LAR)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },
  ];
  tableOxygenHeadings: any = [
    'Product Description',
    'Flow (NM3/HR)',
    'Purity',
    'Pressure (MPaG)',
    'Pressure (After Booster)',
  ];
  tableOxygenContent: any = [
    {
      column1: 'Gases Oxygen (GOX)',
      column2: '1500 - 9000',
      column3: '10ppm(O2)',
      column4: '0.01/0.2',
      column5: 'Up to 140 Kg/cm2',
    },
    {
      column1: 'Liquid Oxygen (LOX)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },
    {
      column1: 'Gases Nitrogen (GN)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },
    {
      column1: 'Liquid Nitrogen (LN)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },

    {
      column1: 'Liquid Argon (LAR)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },
  ];
  tableLiquidHeadings: any = [
    'Product Description',
    'Flow (NM3/HR)',
    'Purity',
    'Pressure (MPaG)',
    'Pressure (After Booster)',
  ];
  tableLiquidContent: any = [
    {
      column1: 'Gases Oxygen (GOX)',
      column2: '1500 - 9000',
      column3: '10ppm(O2)',
      column4: '0.01/0.2',
      column5: 'Up to 140 Kg/cm2',
    },
    {
      column1: 'Liquid Oxygen (LOX)',
      column2: 'optional',
      column3: 'optional',
      column4: 'optional',
      column5: 'optional',
    },
    {
      column1: 'Gases Nitrogen (GN)',
      column2: '65 - 500',
      column3: '<5ppm02',
      column4: '0.2',
      column5: 'optional',
    },
    {
      column1: 'Liquid Nitrogen (LN)',
      column2: '60 - 150',
      column3: '<1ppm02',
      column4: '0.15',
      column5: 'optional',
    },

    {
      column1: 'Liquid Argon (LAR)',
      column2: 'optional',
      column3: '1 kg/cm2 - 5 kg/cm2',
      column4: 'optional',
      column5: 'optional',
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
