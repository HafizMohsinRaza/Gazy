import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsModelComponent } from './ms-model.component';

describe('MsModelComponent', () => {
  let component: MsModelComponent;
  let fixture: ComponentFixture<MsModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsModelComponent]
    });
    fixture = TestBed.createComponent(MsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
