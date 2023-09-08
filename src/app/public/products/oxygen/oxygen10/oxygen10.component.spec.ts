import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oxygen10Component } from './oxygen10.component';

describe('Oxygen10Component', () => {
  let component: Oxygen10Component;
  let fixture: ComponentFixture<Oxygen10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Oxygen10Component]
    });
    fixture = TestBed.createComponent(Oxygen10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
