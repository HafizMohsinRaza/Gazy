import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-client-logo',
  templateUrl: './client-logo.component.html',
  styleUrls: ['./client-logo.component.css']
})
export class ClientLogoComponent  implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("Client Logo");
  }

}
