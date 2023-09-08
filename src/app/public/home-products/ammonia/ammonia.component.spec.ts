import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoniaComponent } from './ammonia.component';

describe('AmmoniaComponent', () => {
  let component: AmmoniaComponent;
  let fixture: ComponentFixture<AmmoniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmmoniaComponent]
    });
    fixture = TestBed.createComponent(AmmoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
