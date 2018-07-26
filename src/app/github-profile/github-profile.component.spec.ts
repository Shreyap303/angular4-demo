import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileComponent } from './github-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

describe('GithubProfileComponent', () => {
  let component: GithubProfileComponent;
  let fixture: ComponentFixture<GithubProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubProfileComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created Github Profile Component', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to dashboard on successful login', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.submit();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(['/followers']);
  });

});
