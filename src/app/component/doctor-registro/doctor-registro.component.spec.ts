import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegistroComponent } from './doctor-registro.component';

describe('DoctorRegistroComponent', () => {
  let component: DoctorRegistroComponent;
  let fixture: ComponentFixture<DoctorRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
