import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, DoCheck {
  user: any = {};
  constructor(private router: Router, private authService: AuthorizationService) {
    this.user.username = '';
    this.user.password = '';
  }
  ngOnInit() {
  }
  ngDoCheck() {
    if (this.authService.isUserLogged()) {
      this.router.navigate(['home']);
    }
  }
  login() {
    const userLogged = this.authService.login(this.user.username, this.user.password);
    if (!userLogged) {
      alert('Wrong username or password, please try again.');
      this.user.username = '';
      this.user.password = '';
    }
  }
}
