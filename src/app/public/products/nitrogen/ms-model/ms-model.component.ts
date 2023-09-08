import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-ms-model',
  templateUrl: './ms-model.component.html',
  styleUrls: ['./ms-model.component.css']
})
export class MsModelComponent  implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("MS Model");
    this.seoService.updateDescription("MS Model a product of the Gaztron Company");
  }
  options: any = [
    {value: 'option-0', viewValue: 'Nitrogen Inertization for Coal & Cement Mill'},
    {value: 'option-1', viewValue: 'Nitrogen Blanketing for Storage Tanks'},
    {value: 'option-2', viewValue: 'Nitrogen for Food Packaging Industry'},
    {value: 'option-3', viewValue: 'Nitrogen Generator (CU-DX Model)'},
    {value: 'option-4', viewValue: 'Nitrogen Generator (DX Model)'},
    {value: 'option-5', viewValue: 'Nitrogen Generator (MS & MS-H Model)'},
  ]
  questions: any =[
    {
      id: 1,
      label: 'Can we get a nitrogen generator tailored to our exact nitrogen gas demand?',
      show: false,
      option: 'Yes, Nitrogen Generators are customized to customer\'s specifications for Purity and Capacity.'
    },
    {
      id: 2,
      label: 'What is the level of purity in Nitrogen gas?',
      show: false,
      option: 'Nitrogen Generators are customizable to achieve Nitrogen Purity ranging from 95% to 99.9998%.'
    },
    {
      id: 3,
      label: 'What is the time frame for delivery?',
      show: false,
      option: 'Typically, 45 days.'
    },
    {
      id: 4,
      label: 'What is the schedule for maintenance?',
      show: false,
      option: 'Nitrogen Generators operate autonomously and do not require continuous supervision once started.'
    },
    {
      id: 5,
      label: 'Is the installation process simple and user-friendly?',
      show: false,
      option: 'The Gas generator comes fully assembled on steel frames and can be placed on the floor. After connecting power, it\'s ready for start-up. We offer Engineer services for on-site installation and commissioning supervision.'
    },
    {
      id: 6,
      label: 'How long do Molecular Sieves typically last?',
      show: false,
      option: 'Molecular Sieves typically last for around 10 years, often lasting the entire lifetime of the Gas generator.'
    },
    {
      id: 7,
      label: 'What are the consequences if a gas generator fails to produce the required level of purity?',
      show: false,
      option: 'An Oxygen Analyzer monitors Nitrogen purity and automatically shuts down the Gas generator with an alarm if the purity falls below the set limit.',
    },
  ];
  tableHeadings: any = [
    'Models',
    'Capacity',

  ];
  tableContent: any = [
    {
      
      column1: 'GAZ-MS-05',
      column2: '0 TO 5 NM3/HR',
      
    },    
    {
      column1: 'GAZ-MS-10',
      column2: '6 TO 10 NM3/HR'
    },
    {
      column1: 'GAZ-MS-20',
      column2: '11 TO 20 NM3/HR'
    },
    {
      column1: 'GAZ-MS-30',
      column2: '21 TO 30 NM3/HR'
    },
    {
      column1: 'GAZ-MS-50',
      column2: '31 TO 50 NM3/HR'
    },
    {
      column1: 'GAZ-MS-100',
      column2: '51 TO 100 NM3/HR'
    },

  ];
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
      title:'Nitrogen Blanketing for Storage Tanks',
      image:'assets/images/special1.png',
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
