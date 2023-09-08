import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oxygen30Component } from './oxygen30.component';

describe('Oxygen30Component', () => {
  let component: Oxygen30Component;
  let fixture: ComponentFixture<Oxygen30Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Oxygen30Component]
    });
    fixture = TestBed.createComponent(Oxygen30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
