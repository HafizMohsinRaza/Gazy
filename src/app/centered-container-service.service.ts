// centered-container.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CenteredContainerService {
  private showContainerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private showContainerPopupSubject: BehaviorSubject<{ show: boolean, positionTitle: string }> = new BehaviorSubject<{ show: boolean, positionTitle: string }>({ show: false, positionTitle: '' });
  public showContainer$ = this.showContainerSubject.asObservable();
  public showContainerPopup$ = this.showContainerPopupSubject.asObservable();


  showContainer(): void {
    this.showContainerSubject.next(true);
  }

  hideContainer(): void {
    this.showContainerSubject.next(false);
  }
  showContainerPopup(show: boolean, positionTitle: string): void {
    this.showContainerPopupSubject.next({ show, positionTitle });
  }

  hideContainerPopup(): void {
    this.showContainerPopupSubject.next({ show: false, positionTitle: '' });
  }
}
