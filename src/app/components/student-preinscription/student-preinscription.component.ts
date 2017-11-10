import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-preinscription',
  templateUrl: './student-preinscription.component.html',
  styleUrls: ['./student-preinscription.component.scss']
})
export class StudentPreInscriptionComponent implements OnInit {
  message: string;
  messageType: string;
  showMessage: boolean;
  fullName: string;
  email: string;
  labelStyle: string;
  constructor() {
    this.message = 'Your availability has been successfully sent to Human Resources Department. Thank you';
    this.messageType = 'success';
    this.showMessage  = false;

    this.fullName = '';
    this.email = '';
    this.labelStyle = '';
  }
  ngOnInit() {}
  save(){
    this.showMessage = true;
  }
}
