import { TestBed, inject } from '@angular/core/testing';

import { GithubFollowersService } from './github-followers.service';
import { HttpModule } from '@angular/http';
import { DataService } from '../data-service';

describe('GithubFollowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [GithubFollowersService, DataService]
    });
  });

  it('should be created', inject([GithubFollowersService], (service: GithubFollowersService) => {
    expect(service).toBeTruthy();
  }));
});
