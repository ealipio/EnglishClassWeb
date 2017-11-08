import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacherPreInscription',
  templateUrl: './teacherPreInscription.component.html',
  styleUrls: ['./teacherPreInscription.component.scss']
})
export class TeacherPreInscriptionComponent implements OnInit {

  message: string = 'Your availability has been successfully sent to Human Resources Department. Thank you';
  messageType: string = 'success';
  showMessage: boolean = false;
  isMenuListVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toogleMenuLevel(){
    debugger;
    this.isMenuListVisible = true;
  }

  save(){
    this.showMessage = true;
  }

}
