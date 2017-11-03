import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
        height: '8rem',
        overflow: 'hidden'
      })),
      transition('hidden <=> visible', animate('450ms ease-in') )
    ])
  ]
})
export class TopmenuComponent implements OnInit {

  constructor(private router: Router) {    
  }

  ngOnInit() {
  }

  state: string = 'hidden';

  toogleMobileMenu() {
    this.state = (this.state === 'hidden' ? 'visible' : 'hidden');
  }

  navigate( url: string){
    this.router.navigate([url]);
    this.toogleMobileMenu();
  }
}
