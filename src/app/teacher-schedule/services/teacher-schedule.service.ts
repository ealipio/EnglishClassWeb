import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { CustomHttpService } from '../../common/services/custom-http.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class TeacherScheduleService {

constructor(private http: Http, private service: CustomHttpService) { }

    public getTeachersByOffice(officeId: number) {        
        return this.http.get(`${environment.apiUrl}/teacher/teachersbyoffice?officeId=${officeId}`)
        .map( result => {
                return result.json();
        });
    }
  
    public getTeacher(teacherId: number) {        
        return this.http.get(`${environment.apiUrl}/teacher/teacherbyid?teacherId=${teacherId}`)
        .map( result => {
            return result.json();
        });
    }

    public getSchedulesByTeacher(teacherId: number) {        
        return this.http.get(`${environment.apiUrl}/schedule/schedulesbyteacher?teacherId=${teacherId}`)
        .map( result => {
            return result.json();
        });
    }
    
    public getLevelsByCourse(courseId: number) {        
        return this.http.get(`${environment.apiUrl}/course/levelsbycourse?courseId=${courseId}`)
        .map( result => {
            return result.json();
        });
    }       

}
