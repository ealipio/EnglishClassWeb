import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClassGroupsService {
result = {
    'groups': [
        {
            'levelName': '1',
            'teacherName': 'Robert',
            'teacherLastName': 'teacher',
            'scheduleDescription': '8:00am - 9:00am',
            'students': 4
        },
        {
            'levelName': '2',
            'teacherName': 'Giomara',
            'teacherLastName': 'teacher',
            'scheduleDescription': 'Tarde 12-13:30',
            'students': 4
        }
    ]
};
API_ENDPOINT = 'http://192.168.1.167/EnglishCourseApi/api';
constructor(private http: Http) { }
    public getGroups() {
        return  this.http.get(`${this.API_ENDPOINT}/example`)
            .map( result => {
                return result.json().teachers; // -- Change this! Is just an example
            });
    }
}
