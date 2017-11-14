import { Component, OnInit } from '@angular/core';
import { MessageBox } from '../../common/models/message-box';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent extends MessageBox implements OnInit {
  buttonText = 'Generate Groups';
  isSpinnerVisible = false;
  isCardsVisible: boolean;
  groups = null;
  areGroupsGenerate = false;
  constructor(private scheduleService: ScheduleService) {
    super();
    this.getScheduleStatus();
    this.getSchedules();
  }

  ngOnInit() {
  }

  private generateCards() {
    this.isSpinnerVisible = true;
    this.buttonText = 'Creating Groups';
    this.scheduleService.postGenerateSchedules().subscribe(
      result => {
        this.areGroupsGenerate = result;
        this.isCardsVisible = true;
        this.getSchedules();
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
    });
  }

  private getSchedules() {
    this.scheduleService.getSchedules().subscribe(
      result => {
        this.groups = result;
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
      });
  }

  private getScheduleStatus (){
    this.scheduleService.getScheduleStatus().subscribe(
      result => {
        this.isCardsVisible = result;
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
      });
  }
}
