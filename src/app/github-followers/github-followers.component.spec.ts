import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowersComponent } from './github-followers.component';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { GithubFollowersService } from './github-followers.service';
import { HttpModule, Http } from '@angular/http';
import { DataService } from '../data-service';

describe('GithubFollowersComponent', () => {
  let component: GithubFollowersComponent;
  let fixture: ComponentFixture<GithubFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubFollowersComponent ],
      imports: [
        HttpModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        DataService,
        GithubFollowersService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
