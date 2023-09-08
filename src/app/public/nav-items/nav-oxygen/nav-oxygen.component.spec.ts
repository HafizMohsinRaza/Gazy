import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOxygenComponent } from './nav-oxygen.component';

describe('NavOxygenComponent', () => {
  let component: NavOxygenComponent;
  let fixture: ComponentFixture<NavOxygenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavOxygenComponent]
    });
    fixture = TestBed.createComponent(NavOxygenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
