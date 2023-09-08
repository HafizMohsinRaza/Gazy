import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitrogenChartComponent } from './nitrogen-chart.component';

describe('NitrogenChartComponent', () => {
  let component: NitrogenChartComponent;
  let fixture: ComponentFixture<NitrogenChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NitrogenChartComponent]
    });
    fixture = TestBed.createComponent(NitrogenChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
