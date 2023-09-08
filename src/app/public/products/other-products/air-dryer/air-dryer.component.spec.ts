import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirDryerComponent } from './air-dryer.component';

describe('AirDryerComponent', () => {
  let component: AirDryerComponent;
  let fixture: ComponentFixture<AirDryerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirDryerComponent]
    });
    fixture = TestBed.createComponent(AirDryerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
