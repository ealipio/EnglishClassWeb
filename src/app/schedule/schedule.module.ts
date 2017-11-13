import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { ScheduleService } from './services/schedule.service';

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleDetailComponent,
],
  imports: [
    ScheduleRoutingModule,
    CommonModule,
    HttpModule,
    FormsModule
  ],
  providers: [ScheduleService],
  bootstrap: [ScheduleComponent],
})
export class ScheduleModule { }
