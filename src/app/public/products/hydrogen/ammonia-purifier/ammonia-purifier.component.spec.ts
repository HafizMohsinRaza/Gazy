import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoniaPurifierComponent } from './ammonia-purifier.component';

describe('AmmoniaPurifierComponent', () => {
  let component: AmmoniaPurifierComponent;
  let fixture: ComponentFixture<AmmoniaPurifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmmoniaPurifierComponent]
    });
    fixture = TestBed.createComponent(AmmoniaPurifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
