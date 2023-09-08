import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreProductsComponent } from './more-products.component';

describe('MoreProductsComponent', () => {
  let component: MoreProductsComponent;
  let fixture: ComponentFixture<MoreProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreProductsComponent]
    });
    fixture = TestBed.createComponent(MoreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
