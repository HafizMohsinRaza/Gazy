import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHomepageContentComponent } from './edit-homepage-content.component';

describe('EditHomepageContentComponent', () => {
  let component: EditHomepageContentComponent;
  let fixture: ComponentFixture<EditHomepageContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHomepageContentComponent]
    });
    fixture = TestBed.createComponent(EditHomepageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
