import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';
  isPortalActive = true;
  searchTerm = '';
  availableCourses = 0;
  message = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    console.log('HomeComponent initialised');
    this.availableCourses = this.courseService.getCourses().length;
    console.log('courses loaded to the component');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
