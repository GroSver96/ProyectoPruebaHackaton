import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacieteComponent } from './paciete.component';

describe('PacieteComponent', () => {
  let component: PacieteComponent;
  let fixture: ComponentFixture<PacieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PacieteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
