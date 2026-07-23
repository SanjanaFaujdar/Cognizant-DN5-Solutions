import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,
         HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from '../services/course.service';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
  });

  // HOL 10 Task 2
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of courses', () => {
    const courses = service.getCourses();
    expect(courses.length).toBeGreaterThan(0);
  });

  it('should get course by id', () => {
    const course = service.getCourseById(1);
    expect(course).toBeDefined();
    expect(course?.name).toBe('Angular');
  });
});
