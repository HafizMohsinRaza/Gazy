import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryogenicComponent } from './cryogenic.component';

describe('CryogenicComponent', () => {
  let component: CryogenicComponent;
  let fixture: ComponentFixture<CryogenicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryogenicComponent]
    });
    fixture = TestBed.createComponent(CryogenicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
