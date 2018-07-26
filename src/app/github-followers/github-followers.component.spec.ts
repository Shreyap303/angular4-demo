import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { GithubFollowersComponent } from './github-followers.component';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { GithubFollowersService } from './github-followers.service';
import { HttpModule } from '@angular/http';
import { DataService } from '../data-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

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
  });

  const followers: any[] = [
    {
      'id': 1,
      'avatar_url': 'Shreya_pic.png',
      'login': 'Shreya',
      'html_url': 'http://github.com/Shreya'
    },
    {
      'id': 2,
      'avatar_url': 'Riya_pic.png',
      'login': 'Riya',
      'html_url': 'http://github.com/Riya'
    },
    {
      'id': 3,
      'avatar_url': 'Monika_pic.png',
      'login': 'Monika',
      'html_url': 'http://github.com/Monika'
    }
  ];

  it('should be created Github Follower Component', () => {
    expect(component).toBeTruthy();
  });

  it('should get all the followers list from backend', fakeAsync(() => {
    const service = TestBed.get(GithubFollowersService);
    spyOn(service, 'getAll').and.returnValue(Observable.from([ this.followers ]));
    component.ngOnInit();
    fixture.detectChanges();
    tick();
    expect(component.followers).toBe(this.followers);
  }));

});
