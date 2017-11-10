import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ScheduleService {


API_ENDPOINT = 'http://englishcourseapi.azurewebsites.net/api';

constructor(private http: Http) { }
    public getSchedules() {
        return  this.http.get(`${this.API_ENDPOINT}/course/groupsummary`)
            .map( result => {
                return result.json().groups;
            });
    }

    public getScheduleDetails(groupId: number) {
        return  this.http.get(`${this.API_ENDPOINT}/course/studentsbygroup?groupId=${groupId}`)
            .map( result => {
                return result.json();
            });
    }

    public getScheduleStatus() {
        return  this.http.get(`${this.API_ENDPOINT}/course/runstatus`)
            .map( result => {
                 return result.json().status;
            });
    }

    public postGenerateSchedules() {
        return  this.http.post(`${this.API_ENDPOINT}/course/generategroups`,{
            "IdPreInscription": "1"
            })
            .map( result => {
                 return result.ok;
            });
    }

}
