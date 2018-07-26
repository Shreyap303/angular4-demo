import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { BootstrapCardComponent } from '../bootstrap-card/bootstrap-card.component';
import { CoursesService } from './courses.service';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        BootstrapCardComponent
      ],
      providers: [
        CoursesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
