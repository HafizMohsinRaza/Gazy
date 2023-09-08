import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generators',
  templateUrl: './generators.component.html',
  styleUrls: ['./generators.component.css'],
})
export class GeneratorsComponent {
  @Input() mainTitle: string = '';
  @Input() mainImage: string = '';
  @Input() mainDescription: string = '';
  @Input() content: any = [
  ];
}
