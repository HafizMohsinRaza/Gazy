import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsaNitrogenComponent } from './psa-nitrogen.component';

describe('PsaNitrogenComponent', () => {
  let component: PsaNitrogenComponent;
  let fixture: ComponentFixture<PsaNitrogenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsaNitrogenComponent]
    });
    fixture = TestBed.createComponent(PsaNitrogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
