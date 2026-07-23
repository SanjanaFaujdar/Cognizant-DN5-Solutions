import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

// Custom validator
export function noCourseCodeValidator(
  control: AbstractControl): ValidationErrors | null {
  return control.value === 'XX' ?
    { invalidCode: true } : null;
}

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {

  enrollForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      courseId: [null, Validators.required],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(
      this.fb.control('', Validators.required)
    );
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      console.log('Enrollment Request submitted successfully!');
      console.log(this.enrollForm.value);
    }
  }

  onReset(): void {
    this.enrollForm.reset();
  }
}
