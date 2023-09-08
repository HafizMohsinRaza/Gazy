import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyProductsComponent } from './key-products.component';

describe('KeyProductsComponent', () => {
  let component: KeyProductsComponent;
  let fixture: ComponentFixture<KeyProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyProductsComponent]
    });
    fixture = TestBed.createComponent(KeyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
