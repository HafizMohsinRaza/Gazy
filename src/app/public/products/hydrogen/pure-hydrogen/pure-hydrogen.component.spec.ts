import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureHydrogenComponent } from './pure-hydrogen.component';

describe('PureHydrogenComponent', () => {
  let component: PureHydrogenComponent;
  let fixture: ComponentFixture<PureHydrogenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PureHydrogenComponent]
    });
    fixture = TestBed.createComponent(PureHydrogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
