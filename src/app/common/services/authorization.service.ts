import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Constants } from '../constants/constants';
import { User } from '../models/user';

@Injectable()
export class AuthorizationService {

  private authUrl = 'http://localhost:58590/connect/token';

  constructor(private router: Router, private http: Http) { }

  public login(username: string, password: string) {

    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options: RequestOptionsArgs =
      {
        headers: headers,
        body: `grant_type=password&username=${username}&password=${password}`,
        method: 'post'
      };


    return this.http.post(this.authUrl, {}, options)
      .map(
        (response: any) => {
          if (response && response._body) {
            const data = JSON.parse(response._body);
            if (data && data.access_token) {
              localStorage.setItem('user', `{"token": "${data.access_token}","type": "${data.resource}"}`);
              this.router.navigate((['home']));
            }
          }
      })
      .catch(this.handleError);
  }

  public getToken(): string {
    const user = localStorage.getItem('user');
    return JSON.parse(user || '{}').token;
  }

  public isUserLogged() {
    return localStorage.getItem('user') ? true : false;
  }

  public logout() {
    localStorage.removeItem('user');
    this.router.navigate((['login']));
  }

  public getUserLogged(): User {
    const user = localStorage.getItem('user');
    return JSON.parse(user || '{}');
  }

  private handleError(data: any) {
    const error = JSON.parse(data._body);
    console.error('Error: ', error.error_description);
    return error.error_description;
  }
}

