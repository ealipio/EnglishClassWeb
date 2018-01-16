import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherListScheduleComponent } from './teacher-list-schedule/teacher-list-schedule.component';
import { AuthGuardService } from '../common/services/auth-guard.service';

const teacherScheduleRoutes: Routes = [
  { path: 'list', component: TeacherListScheduleComponent, canActivate: [AuthGuardService] }  
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