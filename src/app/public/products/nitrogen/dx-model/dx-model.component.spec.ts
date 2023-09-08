import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxModelComponent } from './dx-model.component';

describe('DxModelComponent', () => {
  let component: DxModelComponent;
  let fixture: ComponentFixture<DxModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DxModelComponent]
    });
    fixture = TestBed.createComponent(DxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
