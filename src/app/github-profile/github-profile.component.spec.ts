import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileComponent } from './github-profile.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GithubProfileComponent', () => {
  let component: GithubProfileComponent;
  let fixture: ComponentFixture<GithubProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubProfileComponent ],
      imports: [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
