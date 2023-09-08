import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoxCComponent } from './gox-c.component';

describe('GoxCComponent', () => {
  let component: GoxCComponent;
  let fixture: ComponentFixture<GoxCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoxCComponent]
    });
    fixture = TestBed.createComponent(GoxCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
