import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];
  isLoading = true;
  selectedCourseId: number | null = null;

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.courses = this.courseService.getCourses();
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
    this.enrollmentService.enroll(courseId);
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
