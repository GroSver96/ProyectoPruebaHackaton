import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGroverComponent } from './login-grover.component';

describe('LoginGroverComponent', () => {
  let component: LoginGroverComponent;
  let fixture: ComponentFixture<LoginGroverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginGroverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginGroverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
