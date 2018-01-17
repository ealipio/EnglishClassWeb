import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { CustomHttpService } from '../../common/services/custom-http.service';

@Injectable()
export class TeacherScheduleService {

 API_ENDPOINT = 'http://localhost:58590/api';

constructor(private http: Http, private service: CustomHttpService) { }

    public getTeachersByOffice(officeId: number) {        
        return this.http.get(`${this.API_ENDPOINT}/teacher/teachersbyoffice?officeId=${officeId}`)
        .map( result => {
                return result.json();
        });
    }
  
    public getTeacher(teacherId: number) {        
        return this.http.get(`${this.API_ENDPOINT}/teacher/teacherbyid?teacherId=${teacherId}`)
        .map( result => {
            return result.json();
        });
    }

    public getSchedulesByTeacher(teacherId: number) {        
        return this.http.get(`${this.API_ENDPOINT}/schedule/schedulesbyteacher?teacherId=${teacherId}`)
        .map( result => {
            return result.json();
        });
    }
    
    public getLevelsByCourse(courseId: number) {        
        return this.http.get(`${this.API_ENDPOINT}/course/levelsbycourse?courseId=${courseId}`)
        .map( result => {
            return result.json();
        });
    }       

}
