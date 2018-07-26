import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth-service';
import { RouterOutlet } from '../../node_modules/@angular/router';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        AuthService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the App Component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have Router Outlet', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

  it('should have Navbar Component', () => {
    const de = fixture.debugElement.query(By.directive(NavbarComponent));
    expect(de).not.toBeNull();
  });

});
