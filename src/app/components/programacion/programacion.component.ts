import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.scss']
})
export class ProgramacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buttonText : string = "Generate Groups";
  isSpinnerVisible : boolean = true;
  isCardsVisible: boolean = false;

  generateCards() {
    this.isSpinnerVisible = true;
    this.buttonText = "Creating Groups";
    this.isCardsVisible = !this.isCardsVisible;    
  }
}
