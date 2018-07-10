import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../course/courses.service';

@Component({
  selector: 'app-course',
  template: `
    <br>
    <h1>{{ "Title: "+courseTitle }} </h1>
    <h2 [textContent]="firstTitle"></h2>
    <br>
    <ul>
      <li *ngFor="let course of courseList">
      {{ course }}
      </li>
    </ul>
    <br>
    <h2>{{ getTitle() }} </h2>
    <br>
    <ul>
      <li *ngFor="let course of serviceCourse">
      {{ course }}
      </li>
    </ul>
    <br>
    <app-bootstrap-card>
      <ng-container class="heading">
        Header
      </ng-container>
      <ng-container class="body">
        <h2>Body</h2>
        <p>This is Card Body.</p>
      </ng-container>
    </app-bootstrap-card>
  `,
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  courseTitle = 'My Angular Courses';

  firstTitle = 'First Courses';
  secondTitle = 'Second Courses';
  courseList = ['course1', 'course2', 'course3'];
  serviceCourse;

  constructor(coursesService: CoursesService) {
    this.serviceCourse = coursesService.getCourseList();
  }

  ngOnInit() {
  }

  getTitle() {
    return this.secondTitle;
  }
}
