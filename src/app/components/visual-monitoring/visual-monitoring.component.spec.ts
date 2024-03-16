import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualMonitoringComponent } from './visual-monitoring.component';

describe('VisualMonitoringComponent', () => {
  let component: VisualMonitoringComponent;
  let fixture: ComponentFixture<VisualMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualMonitoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
