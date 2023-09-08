import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InertizationComponent } from './inertization.component';

describe('InertizationComponent', () => {
  let component: InertizationComponent;
  let fixture: ComponentFixture<InertizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InertizationComponent]
    });
    fixture = TestBed.createComponent(InertizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
