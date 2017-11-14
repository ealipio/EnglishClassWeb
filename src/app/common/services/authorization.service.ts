import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from '../models/user';

@Injectable()
export class AuthorizationService {

  private authUrl = 'http://localhost:58589/connect/token';

  private users = [
    {
      name: 'User-Adm',
      username: 'admin',
      password: '123456',
      type: 'RRHH'
    },
    {
      name: 'User-Teacher',
      username: 'teacher',
      password: '123456',
      type: 'teacher'
    },
    {
      name: 'User-Student',
      username: 'student',
      password: '123456',
      type: 'student'
    }];

  constructor(private router: Router, private http: Http) { }

  public login(username: string, password: string) {
    /*const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
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
      .catch(this.handleError);*/
    let validUser = false;
    this.users.forEach( user => {
      if (user.username === username && user.password === password) {
        localStorage.setItem('user',
          `{"name": "${user.name}","username": "${user.username}","password": "${user.password}","type": "${user.type}"}`);
        this.router.navigate((['home']));
        validUser = true;
      }
    });
    return validUser;
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

