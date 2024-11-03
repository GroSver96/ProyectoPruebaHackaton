import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceTrackingComponent } from './ambulance-tracking.component';

describe('AmbulanceTrackingComponent', () => {
  let component: AmbulanceTrackingComponent;
  let fixture: ComponentFixture<AmbulanceTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmbulanceTrackingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmbulanceTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
