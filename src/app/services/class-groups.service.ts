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



studentList =
[
    {
        "idStudent": 1,
        "names": "Angel Tapara Sotomayor",
        "lastNames": "",
        "idLevel": 2,
        "level": null
    },
    {
        "idStudent": 2,
        "names": "Fernando Gonzales A.",
        "lastNames": "",
        "idLevel": 2,
        "level": null
    },
    {
        "idStudent": 3,
        "names": "Henry Chávez",
        "lastNames": "",
        "idLevel": 2,
        "level": null
    },
    {
        "idStudent": 4,
        "names": "Jhosbel Aguilar Rojas ",
        "lastNames": "",
        "idLevel": 2,
        "level": null
    }
];


API_ENDPOINT = 'http://192.168.1.167/EnglishCourseApi/api';

constructor(private http: Http) { }
    public getGroups() {
        return  this.http.get(`${this.API_ENDPOINT}/example`)
            .map( result => {
                return result.json().teachers; // -- Change this! Is just an example
            });
    }
}
