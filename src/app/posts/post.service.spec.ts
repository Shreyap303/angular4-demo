import { TestBed, inject } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpModule, Http } from '../../../node_modules/@angular/http';
import { DataService } from '../data-service';

describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PostService, DataService]
    });
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});
