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
  isCardsVisible :boolean;
  groups = null;
  areGroupsGenerate = false;
  constructor(private classGroupsService: ClassGroupsService) {
    super();
    this.getGroupStatus();
    this.getGroups();
    
  }

  ngOnInit() {
  }

  private generateCards() {
    this.isSpinnerVisible = true;
    this.buttonText = 'Creating Groups';
    this.classGroupsService.postGenerateGroups().subscribe(
      result => {
        this.areGroupsGenerate = result;
        this.isCardsVisible = true;
        this.getGroups();
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
    });
  }

  private getGroups() {
    this.classGroupsService.getGroups().subscribe(
      result => {
        this.groups = result;
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
      });
  }

  private getGroupStatus (){
    this.classGroupsService.getGroupStatus().subscribe(
      result => {
        this.isCardsVisible = result;
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
      });
  }
}