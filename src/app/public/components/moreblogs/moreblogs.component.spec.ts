import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreblogsComponent } from './moreblogs.component';

describe('MoreblogsComponent', () => {
  let component: MoreblogsComponent;
  let fixture: ComponentFixture<MoreblogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreblogsComponent]
    });
    fixture = TestBed.createComponent(MoreblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
