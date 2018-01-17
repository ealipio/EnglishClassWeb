import { Component, OnInit } from '@angular/core';
import { MessageBox } from '../../common/models/message-box';
import { ActivatedRoute } from '@angular/router';
import { TeacherScheduleService } from '../services/teacher-schedule.service';

@Component({
  selector: 'app-teacher-edit-schedule',
  templateUrl: './teacher-edit-schedule.component.html',
  styleUrls: ['./teacher-edit-schedule.component.scss']
})
export class TeacherEditScheduleComponent extends MessageBox implements OnInit {
  teacherId: number;
  teacher = null;
  scheduleList = null;
  isDropdownVisible: boolean;
  scheduleValue : string;
  levelValue : string;

  constructor(private route: ActivatedRoute, private teacherScheduleService: TeacherScheduleService) { 
    super();
    this.teacherId = this.route.snapshot.params['id'];
    this.scheduleValue = 'Select Schedule';
    this.isDropdownVisible = false;    
    this.getTeacherById(this.teacherId);
    this.getSchedulesByTeacher(this.teacherId);    
  }

  ngOnInit() {
  }

  private getTeacherById(teacherId: number) {
    this.teacherScheduleService.getTeacher(teacherId).subscribe(
      result => {
        this.teacher = result;        
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
      });
  }

  private getSchedulesByTeacher(teacherId: number) {
    this.teacherScheduleService.getSchedulesByTeacher(teacherId).subscribe(
      result => {
        this.scheduleList = result;        
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
      });
  }
  
  private showDropdown () {
    this.isDropdownVisible = true;
  }

  private setSchedule (schedule:string) {
    this.scheduleValue = schedule;
    this.isDropdownVisible = false;
  }

  private setLevel (level:string) {
    this.levelValue = level;
    this.isDropdownVisible = false;
  }

}
