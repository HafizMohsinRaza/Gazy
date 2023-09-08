import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpsaComponent } from './vpsa.component';

describe('VpsaComponent', () => {
  let component: VpsaComponent;
  let fixture: ComponentFixture<VpsaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VpsaComponent]
    });
    fixture = TestBed.createComponent(VpsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
