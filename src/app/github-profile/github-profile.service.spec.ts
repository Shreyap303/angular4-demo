import { TestBed, inject } from '@angular/core/testing';

import { GithubProfileService } from './github-profile.service';
import { HttpModule } from '@angular/http';
import { DataService } from '../data-service';

describe('GithubProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [GithubProfileService, DataService]
    });
  });

  it('should be created', inject([GithubProfileService], (service: GithubProfileService) => {
    expect(service).toBeTruthy();
  }));
});
