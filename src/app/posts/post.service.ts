import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from './common/app-error';
import { NotFoundError } from './common/not-found-error';
import { BadInput } from './common/bad-input';
import { DataService } from '../data-service';

@Injectable()
export class PostService extends DataService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
