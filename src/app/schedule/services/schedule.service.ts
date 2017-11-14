import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { CustomHttpService } from '../../common/services/custom-http.service';

@Injectable()
export class ScheduleService {

API_ENDPOINT = 'http://localhost:58590/api';

constructor(private http: Http, private service: CustomHttpService) { }
    public getSchedules() {
        return  this.service.get(`${this.API_ENDPOINT}/course/groupsummary`)
            .map( result => {
                return result.json().groups;
            });
    }

    public getScheduleDetails(groupId: number) {
        return  this.service.get(`${this.API_ENDPOINT}/course/studentsbygroup?groupId=${groupId}`)
            .map( result => {
                return result.json();
            });
    }

    public getScheduleStatus() {
        return  this.service.get(`${this.API_ENDPOINT}/course/runstatus`)
            .map( result => {
                 return result.json().status;
            });
    }

    public postGenerateSchedules() {
        return  this.service.post(`${this.API_ENDPOINT}/course/generategroups`,{
            "IdPreInscription": "1"
            })
            .map( result => {
                 return result.ok;
            });
    }

}
