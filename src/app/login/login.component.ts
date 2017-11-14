import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthorizationService } from '../common/services/authorization.service';
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
    this.authService.login(this.user.username, this.user.password);
    /*.subscribe( (data) => {

    })*/
  }
}
