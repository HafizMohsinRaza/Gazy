import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent {
  @Input() textAlign: string = '';
  @Input() headerColor: string = '';
  @Input() backgroundColor: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() headings: any = [];
  @Input() tableContent: any = [];
  @Input() borderRight: any = [];
}
