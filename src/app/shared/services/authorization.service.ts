import { Injectable } from '@angular/core';

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

  constructor() { }

  public login(username: string, password: string) {
    this.users.forEach( user => {
      if (user.username === username) {

      }
    });
  }

}
