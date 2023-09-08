import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTemplateComponent } from './application-template.component';

describe('ApplicationTemplateComponent', () => {
  let component: ApplicationTemplateComponent;
  let fixture: ComponentFixture<ApplicationTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationTemplateComponent]
    });
    fixture = TestBed.createComponent(ApplicationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
