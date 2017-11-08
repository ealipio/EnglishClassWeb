import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthorizationService {
  users = [
    {
      name: 'User-Adm',
      username: 'admin',
      password: '123456',
      type: 1
    },
    {
      name: 'User-Teacher',
      username: 'teacher',
      password: '123456',
      type: 2
    },
    {
      name: 'User-Student',
      username: 'student',
      password: '123456',
      type: 3
    }];

  constructor(private router: Router) {}

  public login(username: string, password: string) {
    let validUser = false;
    this.users.forEach( user => {
      if (user.username === username) {
        localStorage.setItem('user',
          `{"name": "${user.name}","username": "${user.username}","password": "${user.password}","type": "${user.type}"}`);
        this.router.navigate((['home']));
        validUser = true;
      }
    });
    return validUser;
  }

  public isUserLogged() {
    return localStorage.getItem('user') ? true : false;
  }

  public logout() {
    localStorage.removeItem('user');
    this.router.navigate((['login']));
  }

  public getUserLogged() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

