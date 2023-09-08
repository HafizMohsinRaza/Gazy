import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-gox-i',
  templateUrl: './gox-i.component.html',
  styleUrls: ['./gox-i.component.css']
})
export class GoxIComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("GOX-I");
    this.seoService.updateDescription("GOX-I a product of the Gaztron Company");
  }
  options: any = [
    {value: 'option-0', viewValue: 'PSA Oxygen Gas Generator Plant for Medical Purposes'},
    {value: 'option-1', viewValue: 'PSA Oxygen Gas Generator Plant for Industrial Purposes'},
    {value: 'option-2', viewValue: 'PSA Oxygen Gas Generator Plant (10-20NM3)'},
    {value: 'option-3', viewValue: 'PSA Oxygen Gas Generator Plant (30-60NM3)'},
    {value: 'option-4', viewValue: 'VPSA Oxygen Gas Generator Plant'},
    {value: 'option-5', viewValue: 'Oxygen Cylinder Filling Station'},
  ]
  questions: any =[
    {
      id: 1,
      label: 'What are the established benchmarks or standards for medical-grade oxygen?',
      show: false,
      option: 'Indian Pharmacopoeia, European Pharmacopoeia, British HTM, US FDA standards allow PSA-produced medical gas for use in hospitals and medical facilities.'
    },
    {
      id: 2,
      label: 'What is the space requirement for installing?',
      show: false,
      option: 'Installation of Oxygen generators does not require a significant amount of space.'
    },
    {
      id: 3,
      label: 'What is the time for recovering the cost of investment?',
      show: false,
      option: 'Typically, the plant pays for itself within 12 months.'
    },
    {
      id: 4,
      label: 'What is the level of purity in Oxygen?',
      show: false,
      option: 'Oxygen purity typically ranges from 95% ± 3%.'
    },
    {
      id: 5,
      label: 'Is the installation process simple and user-friendly?',
      show: false,
      option: 'The Gas generator comes fully assembled on steel frames and can be placed on the floor. After connecting power, it\'s ready for start-up. We offer Engineer services for on-site installation and commissioning supervision.'
    },
    {
      id: 6,
      label: 'How long do Zeolite typically last?',
      show: false,
      option: 'Zeolite typically lasts for around 10 years, often lasting the entire lifetime of the Gas generator.'
    },
    {
      id: 7,
      label: 'Is on-site oxygen production more cost-effective than buying oxygen in cylinders or liquid form?',
      show: false,
      option: 'Compared to Cylinder Oxygen/Liquid Oxygen, the gas cost with an Oxygen generator is only Rs. 10 per cubic meter, resulting in significant cost savings.',
    },
  ];
  tableModelHeadings: any = [
    'Models',
    'Capacity',

  ];
  tableModelContent: any = [
    {
      
      column1: 'GAZ-GOXI-05',
      column2: '0 TO 5 NM3/HR',
      
    },    
    {
      column1: 'GAZ-GOXI-10',
      column2: '6 TO 10 NM3/HR'
    },
    {
      column1: 'GAZ-GOXI-20',
      column2: '11 TO 20 NM3/HR'
    },
    {
      column1: 'GAZ-GOXI-30',
      column2: '21 TO 30 NM3/HR'
    },
    {
      column1: 'GAZ-GOXI-50',
      column2: '31 TO 50 NM3/HR'
    },

  ];
  tableHeadings: any = [
    'Models',
    'Capacity (NM3/HR)',
    'Capacity (Liter/Min)',
    'Equivalent Cylinder per day',
    'Number of Beds Oxygen Plant can cater (3LPM)',

  ];
  tableContent: any = [
    {
      
      column1: 'GAZ-GOX-5',
      column2: '5 NM3/HR',
      column3: '83',
      column4: '17',
      column5: '28',
      
    },    
    {
      column1: 'GAZ-GOX-6',
      column2: '6 NM3/HR',
      column3: '100',
      column4: '25',
      column5: '42',
    },
    {
      column1: 'GAZ-GOX-10',
      column2: '10 NM3/HR',
      column3: '167',
      column4: '34',
      column5: '56',
    },
    {
      column1: 'GAZ-GOX-15',
      column2: '15 NM3/HR',
      column3: '250',
      column4: '51',
      column5: '83',
    },
    {
      column1: 'GAZ-GOX-20',
      column2: '20 NM3/HR',
      column3: '333',
      column4: '69',
      column5: '111',
    },
    {
      
      column1: 'GAZ-GOX-30',
      column2: '30 NM3/HR',
      column3: '500',
      column4: '103',
      column5: '167',
      
    },    
    {
      column1: 'GAZ-GOX-40',
      column2: '40 NM3/HR',
      column3: '667',
      column4: '137',
      column5: '222',
    },
    {
      column1: 'GAZ-GOX-50',
      column2: '50 NM3/HR',
      column3: '833',
      column4: '171',
      column5: '278',
    },
    {
      column1: 'GAZ-GOX-55',
      column2: '55 NM3/HR',
      column3: '910',
      column4: '189',
      column5: '289',
    },
    {
      column1: 'GAZ-GOX-60',
      column2: '60 NM3/HR',
      column3: '1000',
      column4: '206',
      column5: '333',
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
