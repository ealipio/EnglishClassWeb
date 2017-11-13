import { Component, OnInit } from '@angular/core';
import { MessageBox } from '../../common/models/message-box';
import { ScheduleService } from '../services/schedule.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})

export class ScheduleDetailComponent extends MessageBox implements OnInit {
  groupId: number;
  groupDetail = null;
  studentsList = null;
  showDetail: boolean;
  constructor(private route: ActivatedRoute, private scheduleService: ScheduleService) {
    super();
    this.showDetail = false;
    this.groupId = this.route.snapshot.params['id'];
    this.getGroupById(this.groupId);
  }
  ngOnInit() {
  }
  private getGroupById(groupId: number) {
    this.scheduleService.getScheduleDetails(groupId).subscribe(
      result => {
        this.groupDetail = result.groupSummary;
        this.studentsList = result.studentGroup;
        this.showDetail = true;
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
      });
  }
}
