import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  @Input() screenwidth = 0;
  @Input() collapsed = false;
  getBody():string{
    let styleClass ='';
    if(this.screenwidth < 768 && this.collapsed){
      styleClass = 'body-trimmed';
    }
    else if(this.screenwidth <= 768 && this.collapsed && this.screenwidth > 0){
      styleClass = 'body-md-screen';
    }

    return styleClass;
  }
}
