import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTransportingNotificationComponent } from './patient-transporting-notification.component';

describe('PatientTransportingNotificationComponent', () => {
  let component: PatientTransportingNotificationComponent;
  let fixture: ComponentFixture<PatientTransportingNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientTransportingNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientTransportingNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
