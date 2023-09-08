import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  constructor(private seoService: SeoService){

  }
  ngOnInit(): void {
    this.seoService.updateTitle("Blogs");
    this.seoService.updateDescription("Blogs of the of Gaztron Company");
  }
  options: any = [
    {value: 'option-0', viewValue: 'PSA Nitrogen Generation Plant'},
    {value: 'option-1', viewValue: 'PSA Oxygen Generation Plant'},
    {value: 'option-2', viewValue: 'Ammonia Cracking Purifier Unit'},
  ]
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
