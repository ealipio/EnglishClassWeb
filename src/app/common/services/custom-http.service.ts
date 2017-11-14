import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class CustomHttpService {

  constructor(private http: Http, private auth: AuthorizationService) { }

  getHeaders(): Headers {
    const token = this.auth.getToken();
    return new Headers({ Authorization:  'bearer ' + token });
  }

  get(url: string) {
    return this.http.get(url, { headers: this.getHeaders() });
  }

  post(url: string, data: any) {
    return this.http.post(url, data, { headers: this.getHeaders() });
  }

}
