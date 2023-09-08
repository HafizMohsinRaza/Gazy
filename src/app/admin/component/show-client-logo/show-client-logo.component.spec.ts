import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClientLogoComponent } from './show-client-logo.component';

describe('ShowClientLogoComponent', () => {
  let component: ShowClientLogoComponent;
  let fixture: ComponentFixture<ShowClientLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowClientLogoComponent]
    });
    fixture = TestBed.createComponent(ShowClientLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
