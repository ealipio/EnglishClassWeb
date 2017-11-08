import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentPreInscription',
  templateUrl: './studentPreInscription.component.html',
  styleUrls: ['./studentPreInscription.component.scss']
})
export class StudentPreInscriptionComponent implements OnInit {

  message: string = 'Your availability has been successfully sent to Human Resources Department. Thank you';
  messageType: string = 'success';
  showMessage: boolean = false;

  fullName: string = '';
  email: string = '';
  labelStyle: string = '';

  constructor() { }


  ngOnInit() {

  } 

  save(){
    this.showMessage = true;
  }


}
