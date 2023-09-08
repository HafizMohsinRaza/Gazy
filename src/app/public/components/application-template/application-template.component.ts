import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-application-template',
  templateUrl: './application-template.component.html',
  styleUrls: ['./application-template.component.css']
})
export class ApplicationTemplateComponent {
  @Input() application!: {title: string, image: string}[];
  @Input() title!: string;
  @Input() description!: string;
  constructor(){
  }
}
