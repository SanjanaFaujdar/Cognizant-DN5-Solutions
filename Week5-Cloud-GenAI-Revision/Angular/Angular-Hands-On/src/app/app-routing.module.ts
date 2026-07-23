import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  {
    path: 'enroll',
    component: EnrollmentFormComponent,
    canActivate: [AuthGuard]
  },
  { path: 'profile', component: StudentProfileComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
