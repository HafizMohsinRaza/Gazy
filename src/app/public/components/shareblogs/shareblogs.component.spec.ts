import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareblogsComponent } from './shareblogs.component';

describe('ShareblogsComponent', () => {
  let component: ShareblogsComponent;
  let fixture: ComponentFixture<ShareblogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareblogsComponent]
    });
    fixture = TestBed.createComponent(ShareblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
