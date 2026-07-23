import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

export const selectCourseState =
  createFeatureSelector<CourseState>('courses');

export const selectAllCourses = createSelector(
  selectCourseState,
  (state: CourseState) => state.courses
);

export const selectLoading = createSelector(
  selectCourseState,
  (state: CourseState) => state.loading
);
