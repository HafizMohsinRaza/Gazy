import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBannerComponent } from './show-banner.component';

describe('ShowBannerComponent', () => {
  let component: ShowBannerComponent;
  let fixture: ComponentFixture<ShowBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBannerComponent]
    });
    fixture = TestBed.createComponent(ShowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
