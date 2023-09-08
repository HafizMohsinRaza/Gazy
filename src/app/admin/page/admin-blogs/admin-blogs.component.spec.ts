import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogsComponent } from './admin-blogs.component';

describe('AdminBlogsComponent', () => {
  let component: AdminBlogsComponent;
  let fixture: ComponentFixture<AdminBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBlogsComponent]
    });
    fixture = TestBed.createComponent(AdminBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
