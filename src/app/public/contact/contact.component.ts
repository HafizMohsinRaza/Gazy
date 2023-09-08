import { Component, Input } from '@angular/core';
import { CenteredContainerService } from 'src/app/centered-container-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showContainer: boolean = false;

  constructor(private centeredContainerService: CenteredContainerService) {}

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


  ngOnInit(): void {
    this.centeredContainerService.showContainer$.subscribe((show) => {
      this.showContainer = show;
    });
  }

  hideContainer(): void {
    this.centeredContainerService.hideContainer();
  }
}
