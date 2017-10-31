import { Component, OnInit } from '@angular/core';
import { ClassGroupsService } from '../../services/class-groups.service';


@Component({
  selector: 'app-programationDetail',
  templateUrl: './programationDetail.component.html',
  styleUrls: ['./programationDetail.component.scss']
})

export class ProgramationDetailComponent implements OnInit {

  groups = null;
  studenGroups = null;

  constructor(private classGroupsService: ClassGroupsService) { 
    this.getGroups();
  }

  ngOnInit() {
  }


  private getGroups() {
    this.classGroupsService.getGroups().subscribe(
      result => {
        this.groups = Object.keys(result).map( key => result[key]);
      }, error => {
        alert(`Error! --> ${error.statusText}`);
      });
  }

  // private getGroupById() {
  //   this.classGroupsService.getGroupById().subscribe(
  //     result => {
  //       this.studenGroups = Object.keys(result).map( key => result[key]);
  //     }, error => {
  //       alert(`Error! --> ${error.statusText}`);
  //     });
  // }

}