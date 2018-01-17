import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherListScheduleComponent } from './teacher-list-schedule/teacher-list-schedule.component';
import { TeacherEditScheduleComponent } from './teacher-edit-schedule/teacher-edit-schedule.component';
import { AuthGuardService } from '../common/services/auth-guard.service';

const teacherScheduleRoutes: Routes = [
  { path: '', component: TeacherListScheduleComponent, canActivate: [AuthGuardService] }, 
  { path: 'edit/:id', component: TeacherEditScheduleComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forChild(teacherScheduleRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class TeacherScheduleRoutingModule {}