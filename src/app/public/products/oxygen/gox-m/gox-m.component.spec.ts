import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoxMComponent } from './gox-m.component';

describe('GoxMComponent', () => {
  let component: GoxMComponent;
  let fixture: ComponentFixture<GoxMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoxMComponent]
    });
    fixture = TestBed.createComponent(GoxMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
