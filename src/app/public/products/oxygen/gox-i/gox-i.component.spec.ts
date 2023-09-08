import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoxIComponent } from './gox-i.component';

describe('GoxIComponent', () => {
  let component: GoxIComponent;
  let fixture: ComponentFixture<GoxIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoxIComponent]
    });
    fixture = TestBed.createComponent(GoxIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
