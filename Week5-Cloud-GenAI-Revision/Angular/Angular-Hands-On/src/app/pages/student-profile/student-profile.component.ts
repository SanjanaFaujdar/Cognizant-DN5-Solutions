import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  enrolledCourseIds: number[] = [];
  enrolledCourses: any[] = [];

  constructor(
    private enrollmentService: EnrollmentService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.enrolledCourseIds =
      this.enrollmentService.getEnrolledCourses();
    this.enrolledCourses = this.enrolledCourseIds
      .map(id => this.courseService.getCourseById(id))
      .filter(c => c !== undefined);
  }
}
