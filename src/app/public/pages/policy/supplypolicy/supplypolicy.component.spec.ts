import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplypolicyComponent } from './supplypolicy.component';

describe('SupplypolicyComponent', () => {
  let component: SupplypolicyComponent;
  let fixture: ComponentFixture<SupplypolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplypolicyComponent]
    });
    fixture = TestBed.createComponent(SupplypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
