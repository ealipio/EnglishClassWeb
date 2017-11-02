import { Component, OnInit } from '@angular/core';
import { MessageBox } from '../../shared/models/message-box';
import { ClassGroupsService } from '../../services/class-groups.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programationDetail',
  templateUrl: './programationDetail.component.html',
  styleUrls: ['./programationDetail.component.scss']
})

export class ProgramationDetailComponent extends MessageBox implements OnInit {
  groupId: number;
  groupDetail = null;
  studentsList = null;
  showDetail: boolean;
  constructor(private route: ActivatedRoute, private classGroupsService: ClassGroupsService) {
    super();
    this.showDetail = false;
    this.groupId = this.route.snapshot.params['id'];
    this.getGroupById(this.groupId);
  }

  ngOnInit() {
  }

  private getGroupById(groupId: number) {
    this.classGroupsService.getGroupDetails(groupId).subscribe(
      result => {
        this.groupDetail = result.groupSummary;
        this.studentsList = result.studentGroup;
        this.showDetail = true;
      }, error => {
        this.message = `Error: ${error.statusText}`;
        this.messageType = 'error';
        this.showMessage = true;
      });
  }
}
