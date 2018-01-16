import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TeacherScheduleRoutingModule } from './teacher-schedule-routing.module';
import { TeacherListScheduleComponent } from './teacher-list-schedule/teacher-list-schedule.component';
import { TeacherScheduleService } from './services/teacher-schedule.service';
import { TeacherEditScheduleComponent } from './teacher-edit-schedule/teacher-edit-schedule.component';

@NgModule({
  declarations: [
    TeacherListScheduleComponent,
    TeacherEditScheduleComponent
],
  imports: [
    TeacherScheduleRoutingModule,
    CommonModule,
    HttpModule,
    FormsModule
  ],
  providers: [TeacherScheduleService],
  bootstrap: [],
})
export class TeacherScheduleModule { }