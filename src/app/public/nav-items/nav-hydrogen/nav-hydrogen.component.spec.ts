import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHydrogenComponent } from './nav-hydrogen.component';

describe('NavHydrogenComponent', () => {
  let component: NavHydrogenComponent;
  let fixture: ComponentFixture<NavHydrogenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavHydrogenComponent]
    });
    fixture = TestBed.createComponent(NavHydrogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
