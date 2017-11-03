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
    this.getGroupStatus();
  }

  ngOnInit() {
  }

  private generateCards() {
    var vm = this;
    this.isSpinnerVisible = true;
    this.buttonText = 'Creating Groups';   
    setTimeout(function(){ 
      vm.isCardsVisible = true;
    }, 800, vm);    
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