import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-pure-hydrogen',
  templateUrl: './pure-hydrogen.component.html',
  styleUrls: ['./pure-hydrogen.component.css']
})
export class PureHydrogenComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("Pure Hydrogen");
    this.seoService.updateDescription("Pure Hydrogen a product of the Gaztron Company");
  }
  options: any = [
    {value: 'option-0', viewValue: 'Hydrogen Generator'},
    {value: 'option-1', viewValue: 'Hydrocarbon Reforming Generators'},
  ]
  questions: any =[
    {
      id: 1,
      label: 'Is it possible to obtain a Hydrogen generator that matches our exact Hydrogen requirements?',
      show: false,
      option: 'Indeed, we provide a range of technologies, and our Hydrogen Generators can be customized to meet the specific requirements of our customers.'
    },
    {
      id: 2,
      label: 'WWhat is the purity of Hydrogen gas?',
      show: false,
      option: 'Our hydrogen supply can achieve a purity level of 99.9998%, with an oxygen impurity content as low as 2 ppm.'
    },
    {
      id: 3,
      label: 'Does this Gas generator require an operator?',
      show: false,
      option: 'Once initiated, the systems can be left unattended as they are fully automated and controlled by PLC, eliminating the need for continuous supervision.'
    },
    {
      id: 4,
      label: 'What is the schedule for maintenance?',
      show: false,
      option: 'Our "Operation Manual" outlines the "Maintenance Schedule," which includes periodic preventive maintenance'
    },
    {
      id: 5,
      label: 'Is the installation process simple and user-friendly?',
      show: false,
      option: 'Certainly! Our generators are either skid-mounted or panel-mounted, ensuring effortless installation.'
    },
    {
      id: 6,
      label: 'Is PEM/Alkaline technology better for water electrolysis?',
      show: false,
      option: 'PEM technology is ideal for safe and compact installations, while alkaline technology is better suited for continuous operation in large industrial settings.'
    }
  ];
  tableHeadings: any = [
    'Technical Specification',
    'GAZ-NPH',
    'GAZ-NPS',
    'GAZ-NPMC',
    'GAZ-NPC',
  ];
  tableContent: any = [
    {
      column1: 'Hydrogen production',
      column2: '2 to 6 Nm3/hr',
      column3: '0.25 to 1 Nm3/hr',
      column4: '10 to 30 Nm3/hr',
      column5: '250 or 500 Nm3/hr',
    },
    {
      column1: 'Hydrogen purity',
      column2: '99.9995% H2',
      column3: '99.9995% H2',
      column4: '99.9998% H2',
      column5: '99.95% - 99.9995% H2',
    },
    {
      column1: 'Hydrogen dew point',
      column2: '99.999% by vol',
      column3: '99.999% by vol',
      column4: '-72°C',
      column5: 'H2O < 5 ppm',
    },
    {
      column1: 'Hydrogen delivery pressure',
      column2: '15 Bar or 30 Bar',
      column3: '15 Bar',
      column4: '30 Bar',
      column5: '30 Bar',
    },

    {
      column1: 'Oxygen',
      column2: 'Automatic, PLC Controlled',
      column3: 'Automatic, PLC Controlled',
      column4: 'Automatic, PLC Controlled',
      column5: 'Automatic, PLC Controlled',
    },
    {
      column1: 'Electrolyte',
      column2: 'Export steam',
      column3: 'Export steam',
      column4: 'Export steam',
      column5: 'Export steam',
    },
    {
      column1: 'Power requirement',
      column2: '6.8 - 7.3 kw/Nm3-H2',
      column3: '6.7 kw/Nm3-H2',
      column4: '5.8 – 6.2 kw/Nm3-H2',
      column5: '1.25 MW or 2.5 MW',
    },
    {
      column1: 'Utilities required from customer',
      column2: 'Power, Deionized & Cooling Water',
      column3: 'Power, Deionized & Cooling Water',
      column4: 'Power, Deionized & Cooling Water',
      column5: 'Power, Deionized & Cooling Water',
    },
  ];
  tableModelHeadings: any = [
    'Technical Specification',
    'Steam Methane Reformer',
    'Methanol Reforming',
  ];
  tableModelContent: any = [
    {
      column1: 'Feedstock',
      column2: 'Natural Gas (Methane), LPG, Naphtha',
      column3: 'Methanol (e.g. British Standard BS 506)',

    },
    {
      column1: 'Capacity Range',
      column2: '200 – 6,500 Nm3/hr single reformer',
      column3: '200 – 5,000+ Nm3/hr',

    },
    {
      column1: 'Hydrogen purity',
      column2: '99.999% by vol',
      column3: '99.999% by vol',
    },
    {
      column1: 'Hydrogen delivery pressure',
      column2: '15 Bar',
      column3: '15 Bar',
    },

    {
      column1: 'Operation',
      column2: 'Automatic, PLC Controlled',
      column3: 'Automatic, PLC Controlled',
    },
    {
      column1: 'By-product',
      column2: 'Export steam',
      column3: 'Export steam',
    }
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
