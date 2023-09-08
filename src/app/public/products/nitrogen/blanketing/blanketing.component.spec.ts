import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanketingComponent } from './blanketing.component';

describe('BlanketingComponent', () => {
  let component: BlanketingComponent;
  let fixture: ComponentFixture<BlanketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlanketingComponent]
    });
    fixture = TestBed.createComponent(BlanketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
