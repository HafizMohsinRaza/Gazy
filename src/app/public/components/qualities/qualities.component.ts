import { Component } from '@angular/core';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.css']
})
export class QualitiesComponent {
  items: any = [
    {title:"Highest Quality",image: "assets/images/10032.png"},
    {title:"40 Years of Experience",image: "assets/images/10017.png"},
    {title:"+5.000 Units Produced",image: "assets/images/10016.png"},
    {title:"High Profile Customers",image: "assets/images/10036.png"},
    {title:"Customizability",image: "assets/images/10028.png"},
    {title:"Efficient & Energy-Saving",image: "assets/images/10034.png"},
    {title:"Fully Automatic",image: "assets/images/10035.png"},
    {title:"Fast Start Up",image: "assets/images/clock.png"}
  ]
}
