import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoniaCrackerComponent } from './ammonia-cracker.component';

describe('AmmoniaCrackerComponent', () => {
  let component: AmmoniaCrackerComponent;
  let fixture: ComponentFixture<AmmoniaCrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmmoniaCrackerComponent]
    });
    fixture = TestBed.createComponent(AmmoniaCrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
