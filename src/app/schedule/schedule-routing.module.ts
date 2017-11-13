import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';

const scheduleRoutes: Routes = [
  { path: '', component: ScheduleComponent },
  { path: 'schedule-detail', component: ScheduleDetailComponent }
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
