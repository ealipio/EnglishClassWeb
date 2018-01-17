import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-edit-schedule',
  templateUrl: './teacher-edit-schedule.component.html',
  styleUrls: ['./teacher-edit-schedule.component.scss']
})
export class TeacherEditScheduleComponent implements OnInit {
  teacherName : string;
  isDropdownVisible: boolean;
  scheduleValue : string;
  levelValue : string;

  constructor() { 
    this.teacherName = 'GiomaraAndre Arce';
    this.scheduleValue = 'Select Schedule';
    this.levelValue = 'Select Level';
    this.isDropdownVisible = false;
  }

  ngOnInit() {
  }

  showDropdown () {
    this.isDropdownVisible = true;
  }

  setSchedule (schedule:string) {
    this.scheduleValue = schedule;
    this.isDropdownVisible = false;
  }

  setLevel (level:string) {
    this.levelValue = level;
    this.isDropdownVisible = false;
  }

}
