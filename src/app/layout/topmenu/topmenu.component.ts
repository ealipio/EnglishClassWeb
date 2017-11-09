import { Component, OnInit, DoCheck } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { Constants } from '../../services/constants';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
  animations: [
    trigger('navbarState', [
      state('hidden', style({
        visibility: 'hidden',
        height: '0',
        overflow: 'hidden'
      })),
      state('visible',   style({
        visibility: 'visible',
        height: '10rem',
        overflow: 'hidden'
      })),
      transition('hidden <=> visible', animate('450ms ease-in') )
    ])
  ]
})
export class TopmenuComponent implements OnInit, DoCheck {
  state: string;
  userLogged: boolean;
  isAdmin: boolean;
  isTeacher: boolean;
  isStudent: boolean;
  constructor(private router: Router, private authService: AuthorizationService) {
    this.state = 'hidden';
    this.userLogged = this.authService.isUserLogged();
    this.isAdmin = false;
    this.isTeacher = false;
    this.isStudent = false;
  }
  ngOnInit() {}
  ngDoCheck() {
    this.userLogged = this.authService.isUserLogged();
    if (this.userLogged) {
      const user = this.authService.getUserLogged();
      if (user.type === Constants.USER_TYPE_ADMIN) {
        this.isAdmin = true;
        this.isTeacher = false;
        this.isStudent = false;
        return;
      }
      if (user.type === Constants.USER_TYPE_TEACHER) {
        this.isAdmin = false;
        this.isTeacher = true;
        this.isStudent = false;
        return;
      }
      if (user.type === Constants.USER_TYPE_STUDENT) {
        this.isAdmin = false;
        this.isTeacher = false;
        this.isStudent = true;
        return;
      }
    }
  }
  toogleMobileMenu() {
    this.state = (this.state === 'hidden' ? 'visible' : 'hidden');
  }
  navigate( url: string) {
    this.router.navigate([url]);
    this.toogleMobileMenu();
  }
  logout() {
    this.authService.logout();
    this.userLogged = this.authService.isUserLogged();
    this.state = 'hidden';
  }
}
