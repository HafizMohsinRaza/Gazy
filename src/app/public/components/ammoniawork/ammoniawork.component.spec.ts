import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoniaworkComponent } from './ammoniawork.component';

describe('AmmoniaworkComponent', () => {
  let component: AmmoniaworkComponent;
  let fixture: ComponentFixture<AmmoniaworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmmoniaworkComponent]
    });
    fixture = TestBed.createComponent(AmmoniaworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
