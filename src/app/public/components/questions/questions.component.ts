import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent {
  @Input() color: string = '';
  @Input() backgroundColor: string = '';
  @Input() image: string = '';
  @Input() questions: any = '';

  // toggleDropdown(id: number) {
  //   const dropdown = this.questions.find((d) => d.id === id);
  //   if (dropdown) {
  //     dropdown.show = !dropdown.show;
  //   }
  // }
}
