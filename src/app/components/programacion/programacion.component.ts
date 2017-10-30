import { Component, OnInit } from '@angular/core';
import { ClassGroupsService } from '../../services/class-groups.service';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.scss']
})
export class ProgramacionComponent implements OnInit {
  buttonText = 'Generate Groups';
  isSpinnerVisible = false;
  isCardsVisible = true;
  groups = null;
  constructor(private classGroupsService: ClassGroupsService) {
    this.getGroups();
  }

  ngOnInit() {
  }

  private generateCards() {
    this.isSpinnerVisible = true;
    this.buttonText = 'Creating Groups';
    this.isCardsVisible = !this.isCardsVisible;
  }

  private getGroups() {
    this.classGroupsService.getGroups().subscribe(
      result => {
        this.groups = Object.keys(result).map( key => result[key]);
      }, error => {
        alert(`Error! --> ${error.statusText}`);
      });
  }
}
