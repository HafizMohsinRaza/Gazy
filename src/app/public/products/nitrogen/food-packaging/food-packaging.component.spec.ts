import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPackagingComponent } from './food-packaging.component';

describe('FoodPackagingComponent', () => {
  let component: FoodPackagingComponent;
  let fixture: ComponentFixture<FoodPackagingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPackagingComponent]
    });
    fixture = TestBed.createComponent(FoodPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
