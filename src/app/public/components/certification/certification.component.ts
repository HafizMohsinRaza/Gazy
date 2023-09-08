import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css'],
})
export class CertificationComponent {
  options: any = [
    {value: 'option-0', viewValue: 'PSA Nitrogen Generation Plant'},
    {value: 'option-1', viewValue: 'PSA Oxygen Generation Plant'},
    {value: 'option-2', viewValue: 'Ammonia Cracking Purifier Unit'},
  ]
  certificate = [
    {
      img: 'assets/images/C1.png',
      title: 'CE ',
    },
    {
      img: 'assets/images/C2.png',
      title: 'ISO 13585 : 2016 ',
    },
    {
      img: 'assets/images/C3.png',
      title: 'ISO 14001 :2015 ',
    },
    {
      img: 'assets/images/C4.png',
      title: 'ISO 9001 : TUV ',
    },
    {
      img: 'assets/images/C5.png',
      title: 'NSIC ',
    },
  ];
}
