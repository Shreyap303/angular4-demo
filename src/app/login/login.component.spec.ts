import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Login Component', () => {
    expect(component).toBeTruthy();
  });

  const user1 = {
    email: 'shreya',
    password: 'shreya',
  };

  const user2 = {
    email: 'admin',
    password: 'admin',
  };

  it('should save data to localStorage on successful login', () => {
    component.signIn(user1);
    fixture.detectChanges();
    expect(localStorage.getItem('user')).not.toBe(null);
    localStorage.clear();
  });

  it('should redirect to Home on successful login', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.signIn(user2);
    expect(spy).toHaveBeenCalledWith(['/']);
    localStorage.clear();
  });

  it('should set `invalidLogin` variable to true on unsuccessful login', () => {
    component.signIn({});
    fixture.detectChanges();
    expect(localStorage.getItem('user')).toBe(null);
    expect(component.invalidLogin).toBeTruthy();
    localStorage.clear();
  });

});
