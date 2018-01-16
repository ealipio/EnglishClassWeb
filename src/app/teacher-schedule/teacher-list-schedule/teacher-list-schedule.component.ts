import { Component, OnInit, DoCheck } from '@angular/core';
import { MessageBox } from '../../common/models/message-box';
import { TeacherScheduleService } from '../services/teacher-schedule.service';

@Component({
    selector: 'app-teacher-list-schedule',
    templateUrl: './teacher-list-schedule.component.html',
    styleUrls: ['./teacher-list-schedule.component.scss']
  })
  export class TeacherListScheduleComponent extends MessageBox implements OnInit, DoCheck {
    officeId: number;
    teachers = null;
    private teacherScheduleService: TeacherScheduleService;

    constructor(teacherScheduleService: TeacherScheduleService) {
      super();
      this.officeId = 1;
      this.teacherScheduleService = teacherScheduleService;
      this.getTeachers(this.officeId);
    }

    ngOnInit() {
    }

    ngDoCheck() {
      /*
      if (this.authService.isUserLogged()) {
        this.router.navigate(['home']);
      }
      */
    }
    
    private getTeachers(officeId: number) {
      this.teacherScheduleService.getTeachersByOffice(officeId).subscribe(
        result => {
          this.teachers = result;
        }, error => {
          this.message = `Error: ${error.statusText}`;
          this.messageType = 'error';
          this.showMessage = true;
        });
    }    

  }