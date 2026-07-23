import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    { id: 1, name: 'Angular', code: 'ANG101',
      credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'React', code: 'RCT101',
      credits: 4, gradeStatus: 'pending' },
    { id: 3, name: 'Spring Boot', code: 'SPB101',
      credits: 4, gradeStatus: 'failed' },
    { id: 4, name: 'Microservices', code: 'MCS101',
      credits: 4, gradeStatus: 'passed' },
    { id: 5, name: 'DevOps', code: 'DEV101',
      credits: 3, gradeStatus: 'pending' }
  ];

  constructor(private http: HttpClient) {}

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
