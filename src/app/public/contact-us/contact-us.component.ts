import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("Contact US");
    this.seoService.updateDescription("Contact information of Gaztron Company");
  }
  
    center = {
        lat: 28.502157,
        lng: 77.477204
    };
    zoom = 15;
    heatmapOptions = {
        radius: 5
    };
    heatmapData = [{
        lat: 28.502157,
        lng: 77.477204
    }];
    options: any = [
      {value: 'option-0', viewValue: 'PSA Nitrogen Generation Plant'},
      {value: 'option-1', viewValue: 'PSA Oxygen Generation Plant'},
      {value: 'option-2', viewValue: 'Ammonia Cracking Purifier Unit'},
    ]

  details: any = [
    {
      icon: 'fa-solid fa-phone',
      title: 'Phone Number',
      description:'+91-8447203393, 120-2397777, 120-2397778'
    },
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email Address',
      description:'info@gaztron.in, marketing@gaztronengineering.com'
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Gaztron Headquarter',
      description:'Industrial Plot No. - 179, Udyog Kendra - I, Ecotech- III, Greater Noida -201318'
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Gaztron’s Manufacturing Unit 2',
      description:'Industrial Plot No. – A 341, Udyog Kendra – I, Ecotech– III, Greater Noida –201318'
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Gaztron’s Manufacturing Unit 3',
      description:'Industrial Plot N0. - 85 YEIDA Sector-28, Yamuna Expressway, 203135'
    },
    
  ];
  
}
