import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTransportNotificationComponent } from './patient-transport-notification.component';

describe('PatientTransportNotificationComponent', () => {
  let component: PatientTransportNotificationComponent;
  let fixture: ComponentFixture<PatientTransportNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientTransportNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientTransportNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
