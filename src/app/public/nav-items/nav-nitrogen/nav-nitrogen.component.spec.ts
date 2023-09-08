import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNitrogenComponent } from './nav-nitrogen.component';

describe('NavNitrogenComponent', () => {
  let component: NavNitrogenComponent;
  let fixture: ComponentFixture<NavNitrogenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavNitrogenComponent]
    });
    fixture = TestBed.createComponent(NavNitrogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
