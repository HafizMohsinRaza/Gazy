import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() imgCollection: any[] = []; 
  @Output() slideChange = new EventEmitter<number>();

  onSlideChange(index: number) {
    this.slideChange.emit(index);
  }

  onSlideChanged(event: any) {
    const newIndex = event.to;
    this.onSlideChange(newIndex);
  }
  
}
