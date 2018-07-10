import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourseList() {
    return ['course4', 'course5', 'course6'];
  }

}
