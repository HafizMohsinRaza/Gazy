import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopmenuComponent } from './popmenu.component';

describe('PopmenuComponent', () => {
  let component: PopmenuComponent;
  let fixture: ComponentFixture<PopmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopmenuComponent]
    });
    fixture = TestBed.createComponent(PopmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
