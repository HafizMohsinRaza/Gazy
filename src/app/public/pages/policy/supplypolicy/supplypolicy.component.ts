import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-supplypolicy',
  templateUrl: './supplypolicy.component.html',
  styleUrls: ['./supplypolicy.component.css']
})
export class SupplypolicyComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("Supply Policy");
    this.seoService.updateDescription("Supply Policy of Gaztron Company");
  }
  options: any = [
    {value: 'option-0', viewValue: 'PSA Nitrogen Generation Plant'},
    {value: 'option-1', viewValue: 'PSA Oxygen Generation Plant'},
    {value: 'option-2', viewValue: 'Ammonia Cracking Purifier Unit'},
  ]
}
