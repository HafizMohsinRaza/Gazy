import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-nav-nitrogen',
  templateUrl: './nav-nitrogen.component.html',
  styleUrls: ['./nav-nitrogen.component.css'],
})
export class NavNitrogenComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("Nitrogen Plant");
    this.seoService.updateDescription("Nitrogen Plant a product of the Gaztron Company");
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
  specialization: any = [
    {
      title: 'Nitrogen Blanketing for Storage Tanks',
      description:
        'Ensuring safety & security in flammable or explosive industries with our high-quality products.',
      image: 'assets/images/special1.png',
    },
    {
      title: 'Nitrogen Inertization for Coal & Cement Mill',
      description:
        'Keeping the cement & coal industry future-equipped with the latest mechanism and machinery.',
      image: 'assets/images/special2.png',
    },
    {
      title: 'Nitrogen for Food Packaging Industry',
      description:
        'Designing variety of equipment to sustain the nature and authenticity of food products.',
      image: 'assets/images/special3.png',
    },
  ];
  nitrogen: any = [
    {
      title: 'Nitrogen Generator (CU-DX Model)',
      description:
        'CU-DX Model is an innovative solution for generating ultra-pure nitrogen gas at 99.9999% (1 PPM).',
      image: 'assets/images/nitrogen-generator1.png',
    },
    {
      title: 'Nitrogen Generator (DX Model)',
      description:
        'DX Model is a cutting-edge solution for generating high purity nitrogen from 99.9995% to 99.9999%.',
      image: 'assets/images/nitrogen-generator2.png',
    },
    {
      title: 'Nitrogen Generator (MS & MS-H Model)',
      description:
        'MS Model is a versatile solution for high-purity nitrogen gas for a wide range of industrial applications.',
      image: 'assets/images/nitrogen-generator3.png',
    },
  ];
  tableHeadings: any = ['Gas Composition', 'MS', 'MS-H', 'DX', 'COPPER-DX'];
  tableContent: any = [
    {
      column1: 'Oxygen',
      column2: '0.1 to 5%',
      column3: '1-ppm to 500-ppm',
      column4: '1-ppm to 3-ppm (max)',
      column5: '1-ppm',
    },
    {
      column1: 'Hydrogen',
      column2: 'Nl',
      column3: 'Nil',
      column4: '1-ppm to 3-ppm (max)',
      column5: '1-ppm',
    },
    {
      column1: 'Nitrogen',
      column2: '95 to 99.9%',
      column3: '99.95 to 99.9999%',
      column4: '1-ppm to 3-ppm (max)',
      column5: '1-ppm',
    },
    {
      column1: 'Dew Point',
      column2: '-40°C to -80°C',
      column3: '-40°C to -80°C',
      column4: '-40°C to -80°C',
      column5: '-40°C to -80°C',
    },
    {
      column1: 'N2 Capacity',
      column2: '1 to 1000 M3/hr',
      column3: '1 to 1000 M3/hr',
      column4: '1 to 1000 M3/hr',
      column5: '1 to 1000 M3/hr',
    },
    {
      column1: 'Maintenance',
      column2: 'EASY',
      column3: 'EASY',
      column4: 'SKILLED MANPOWER REQUIRED',
      column5: 'SKILLED MANPOWERREQUIRED',
    },
    {
      column1: 'Operation',
      column2: 'EASY',
      column3: 'EASY',
      column4: 'SKILLED MANPOWER REQUIRED',
      column5: 'SKILLED MANPOWER REQUIRED',
    },
    {
      column1: 'H2 CONTENT IN NITROGEN',
      column2: 'NO',
      column3: 'NO',
      column4: 'YES',
      column5: 'YES',
    },
    {
      column1: 'HYDROGEN OR AMMONIA REQUIRED As Consumable',
      column2: 'NO',
      column3: 'NO',
      column4: 'YES',
      column5: 'YES',
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
