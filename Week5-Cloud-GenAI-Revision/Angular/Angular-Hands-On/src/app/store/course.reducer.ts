import { createReducer, on } from '@ngrx/store';
import { Course } from '../models/course.model';
import { loadCoursesSuccess, addCourse } from './course.actions';

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

export const courseReducer = createReducer(
  initialState,
  on(loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false
  })),
  on(addCourse, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course]
  }))
);
