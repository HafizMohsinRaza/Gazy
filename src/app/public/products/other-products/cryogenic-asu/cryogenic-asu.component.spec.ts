import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryogenicAsuComponent } from './cryogenic-asu.component';

describe('CryogenicAsuComponent', () => {
  let component: CryogenicAsuComponent;
  let fixture: ComponentFixture<CryogenicAsuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryogenicAsuComponent]
    });
    fixture = TestBed.createComponent(CryogenicAsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
