import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsaOxygenComponent } from './psa-oxygen.component';

describe('PsaOxygenComponent', () => {
  let component: PsaOxygenComponent;
  let fixture: ComponentFixture<PsaOxygenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsaOxygenComponent]
    });
    fixture = TestBed.createComponent(PsaOxygenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
