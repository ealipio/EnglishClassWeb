import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClassGroupsService {


API_ENDPOINT = 'http://englishcourseapi.azurewebsites.net/api';

constructor(private http: Http) { }
    public getGroups() {
        return  this.http.get(`${this.API_ENDPOINT}/course/groupsummadfgry`)
            .map( result => {
                return result.json().groups;
            });
    }

    public getGroupDetails(groupId: number) {
        return  this.http.get(`${this.API_ENDPOINT}/course/studentsbygroup?groupId=${groupId}`)
            .map( result => {
                return result.json();
            });
    }

    public getGroupStatus() {
        return  this.http.get(`${this.API_ENDPOINT}/course/runstatus`)
            .map( result => {
                 return result.json().status;
            });
    }

}
