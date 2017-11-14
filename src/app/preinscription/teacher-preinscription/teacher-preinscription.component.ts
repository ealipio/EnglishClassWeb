import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-preinscription',
  templateUrl: './teacher-preinscription.component.html',
  styleUrls: ['./teacher-preinscription.component.scss']
})
export class TeacherPreInscriptionComponent implements OnInit {
  message: string;
  messageType: string;
  showMessage: boolean;
  isMenuListVisible: boolean;

  constructor() {
    this.message = 'Your availability has been successfully sent to Human Resources Department. Thank you';
    this.messageType = 'success';
    this.showMessage = false;
    this.isMenuListVisible = false;
  }
  ngOnInit() {}
  showMenuLevel() {
    this.isMenuListVisible = true;
  }
  hideMenuLevel() {
    this.isMenuListVisible = false;
  }
  save() {
    this.showMessage = true;
  }

}
