import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() isOpen: boolean = false;
  @Output() closeMenu = new EventEmitter<void>();
  onCloseButtonClick() {
    this.closeMenu.emit();
  }
}
