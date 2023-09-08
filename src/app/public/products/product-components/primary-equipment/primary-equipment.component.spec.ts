import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryEquipmentComponent } from './primary-equipment.component';

describe('PrimaryEquipmentComponent', () => {
  let component: PrimaryEquipmentComponent;
  let fixture: ComponentFixture<PrimaryEquipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryEquipmentComponent]
    });
    fixture = TestBed.createComponent(PrimaryEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
