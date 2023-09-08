import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-nav-oxygen',
  templateUrl: './nav-oxygen.component.html',
  styleUrls: ['./nav-oxygen.component.css'],
})
export class NavOxygenComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("Oxygen Plant");
    this.seoService.updateDescription("Oxygen Plant a product of the Gaztron Company");
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
  specialization: any = [
    {
      title: 'Oxygen Generator for Medical Purposes',
      description:
        'Delivering dependable and secure on-site oxygen generation solutions for the healthcare industries.',
      image: 'assets/images/oxygen-special1.png',
    },
    {
      title: 'Oxygen Generator for Industrial Purposes',
      description:
        'Empowering industrial growth with cutting-edge tools and equipment.',
      image: 'assets/images/oxygen-special2.png',
    },
    {
      title: 'Oxygen Cylinder Filling Station',
      description:
        'Creating top-tier, energy-efficient oxygen cylinder filling stations through extensive R&D.',
      image: 'assets/images/oxygen-special3.png',
    },
  ];
  oxygen: any = [
    {
      title: 'Oxygen Generator (GOX-M Model)',
      description:
        'GOX-M Model is an innovative solution for generating high purity oxygen gas for medical purposes.',
      image: 'assets/images/oxygen-generator1.png',
    },
    {
      title: 'Oxygen Generator (GOX-I Model)',
      description:
        'GOX-I Model is a novel method for producing ultra-high purity oxygen gas for industrial applications.',
      image: 'assets/images/oxygen-generator2.png',
    },
    {
      title: 'Oxygen Generator (GOX-C Model)',
      description:
        'GOX Model is your one step solution for all your oxygen cylinder filling requirement.',
      image: 'assets/images/oxygen-generator3.png',
    },
    {
      title: 'VPSA Oxygen Generator',
      description:
        'VPSA Oxygen Generator is a versatile solution that finds applications in diverse industries worldwide.',
      image: 'assets/images/oxygen-generator4.png',
    },
    {
      title: 'PSA Oxygen Generator (10-20 NM3)',
      description:
        'PSA oxygen generator is a reliable & efficient solution for meeting oxygen demands in various industries.',
      image: 'assets/images/oxygen-generator5.png',
    },
    {
      title: 'PSA Oxygen Generator (30-60 NM3)',
      description:
        'PSA oxygen generator is a reliable & efficient solution for meeting oxygen demands in various industries.',
      image: 'assets/images/oxygen-generator6.png',
    },
  ];
  tableHeadings: any = [
    'Gas Composition',
    'Industrial Oxygen Generator',
    'Medical Oxygen Generator',
    'Oxygen Filling Station',
    'PSA/VPSA Oxygen Generator',
  ];
  tableContent: any = [
    {
      column1: 'Oxygen',
      column2: '93% ± 3%',
      column3: '93% ± 3%',
      column4: '93% ± 3%',
      column5: '93% ± 3%',
    },
    {
      column1: '02 Capacity (LPM)',
      column2: '100-1500',
      column3: '100-1500',
      column4: '100-1500',
      column5: '100-1500',
    },
    {
      column1: '02 Capacity (NM3/HR)',
      column2: '6- 90 ',
      column3: '6- 90 ',
      column4: '6- 90 ',
      column5: '6- 90 ',
    },
    { column1: 'Nitrogen', column2: '7%', column3: '7%', column4: '7%', column5: '7%' },
    {
      column1: 'Dew Point',
      column2: '-40°C',
      column3: '-40°C',
      column4: '-40°C',
      column5: '-40°C',
    },
    {
      column1: 'Maintenance',
      column2: 'EASY',
      column3: 'EASY',
      column4: 'SKILLED MANPOWER REQUIRED',
      column5: 'EASY',
    },
    {
      column1: 'Operation',
      column2: 'EASY',
      column3: 'EASY',
      column4: 'SKILLED MANPOWER REQUIRED',
      column5: 'EASY',
    },
    {
      column1: 'Required Utiliy',
      column2: 'Dry Air, Cooling Water, Power',
      column3: 'Dry Air, Cooling Water, Power',
      column4: 'Dry Air, Cooling Water, Power',
      column5: 'Dry Air, Cooling Water, Power',
    },
    {
      column1: 'Applications',
      column2: 'Pharma, Food Packaging , Furnaces, Fire Control',
      column3: 'Chemical, Pharma, Heat Treatment, Electronic',
      column4: 'Chemical & Metallurgical Industries.',
      column5: 'Electronics, Synthetic Fiber, Pharma',
    },
  ];
  tableHeadingsCapacity: any = [
    'Model',
    'Capacity (NM3/HR)',
    'Capacity (Liter/Min)',
    'Equivalent Cylinder per day',
    'Number of Beds Oxygen Plant can cater (3LPM)',
  ];
  tableContentCapacity: any = [
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
      column1: 'GAZ-GOX-60',
      column2: '60 NM3/HR',
      column3: '1000',
      column4: '206',
      column5: '333',
    },
  ];
  generators = [
    {
      logo: 'assets/images/efficacy 9.png',
      name: 'International Certification',
    },
    { logo: 'assets/images/efficacy 2.png', name: 'Customizability' },
    {
      logo: 'assets/images/quick-installation.png',
      name: 'Quick Installation',
    },
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
    { logo: 'assets/images/efficacy 6.png', name: 'High Profile Customers' },
    { logo: 'assets/images/efficacy 3.png', name: 'Reliability' },
  ];
}
