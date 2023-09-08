import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CudxModelComponent } from './cudx-model.component';

describe('CudxModelComponent', () => {
  let component: CudxModelComponent;
  let fixture: ComponentFixture<CudxModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CudxModelComponent]
    });
    fixture = TestBed.createComponent(CudxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
