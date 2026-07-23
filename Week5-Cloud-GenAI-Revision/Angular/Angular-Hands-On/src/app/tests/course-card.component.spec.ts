import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    };
    fixture.detectChanges();
  });

  // HOL 10 Task 1
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display course name', () => {
    const h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3.nativeElement.textContent).toContain('Angular');
  });

  it('should emit enrollRequested on enroll click', () => {
    spyOn(component.enrollRequested, 'emit');
    component.onEnroll();
    expect(component.enrollRequested.emit)
      .toHaveBeenCalledWith(1);
  });

  it('should toggle isExpanded on toggleExpand', () => {
    expect(component.isExpanded).toBeFalse();
    component.toggleExpand();
    expect(component.isExpanded).toBeTrue();
  });
});
