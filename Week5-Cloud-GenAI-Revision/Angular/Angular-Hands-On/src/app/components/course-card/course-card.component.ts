import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input() course: any = {
    id: 0, name: '', code: '', credits: 0, gradeStatus: 'pending'
  };

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  onEnroll(): void {
    this.enrollRequested.emit(this.course.id);
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses(): string[] {
    const classes = ['card'];
    if (this.course.gradeStatus === 'passed') classes.push('card-enrolled');
    if (this.isExpanded) classes.push('expanded');
    return classes;
  }
}
