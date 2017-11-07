import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentPreInscription',
  templateUrl: './studentPreInscription.component.html',
  styleUrls: ['./studentPreInscription.component.scss']
})
export class StudentPreInscriptionComponent implements OnInit {

  message: string = 'The Pre - Inscription was succesfully';
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
