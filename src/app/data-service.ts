import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { AppError } from './posts/common/app-error';
import { NotFoundError } from './posts/common/not-found-error';
import { BadInput } from './posts/common/bad-input';

@Injectable()
export class DataService {

  login: boolean;

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(res => res.json())
      .catch( this.handleError );
  }

  create(data) {
    return this.http.post(this.url, JSON.stringify(data))
      .map(res => res.json())
      .catch( this.handleError );
  }

  update(data) {
    return this.http.patch(this.url + '/' + data.id, JSON.stringify({isRead: true}))
      .map(res => res.json())
      .catch( this.handleError );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json())
      .catch( this.handleError );
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    } else if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    return Observable.throw(new AppError(error));
  }

}
