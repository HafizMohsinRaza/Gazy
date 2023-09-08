import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientLogoComponent } from './create-client-logo.component';

describe('CreateClientLogoComponent', () => {
  let component: CreateClientLogoComponent;
  let fixture: ComponentFixture<CreateClientLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateClientLogoComponent]
    });
    fixture = TestBed.createComponent(CreateClientLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
