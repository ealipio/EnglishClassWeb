import { Component, OnInit } from '@angular/core';
import { MessageBox } from '../../shared/models/message-box';
import { ClassGroupsService } from '../../services/class-groups.service';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.scss']
})
export class ProgramacionComponent extends MessageBox implements OnInit {
  buttonText = 'Generate Groups';
  isSpinnerVisible = false;
  isCardsVisible = true;
  groups = null;
  constructor(private classGroupsService: ClassGroupsService) {
    super();
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
        this.groups = result; // Object.keys(result).map( key => result[key]);
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
      });
  }
}
