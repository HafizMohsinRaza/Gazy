import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedblogsComponent } from './expandedblogs.component';

describe('ExpandedblogsComponent', () => {
  let component: ExpandedblogsComponent;
  let fixture: ComponentFixture<ExpandedblogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandedblogsComponent]
    });
    fixture = TestBed.createComponent(ExpandedblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
