import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';

import { AuthGuardService } from '../common/services/auth-guard.service';

const scheduleRoutes: Routes = [
  { path: '', component: ScheduleComponent, canActivate: [AuthGuardService] },
  { path: 'detail/:id', component: ScheduleDetailComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forChild(scheduleRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ScheduleRoutingModule {}
