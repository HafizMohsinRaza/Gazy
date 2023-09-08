import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJobComponent } from './show-job.component';

describe('ShowJobComponent', () => {
  let component: ShowJobComponent;
  let fixture: ComponentFixture<ShowJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowJobComponent]
    });
    fixture = TestBed.createComponent(ShowJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
