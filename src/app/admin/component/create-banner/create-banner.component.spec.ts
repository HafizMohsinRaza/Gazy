import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBannerComponent } from './create-banner.component';

describe('CreateBannerComponent', () => {
  let component: CreateBannerComponent;
  let fixture: ComponentFixture<CreateBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBannerComponent]
    });
    fixture = TestBed.createComponent(CreateBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
