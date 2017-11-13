import { Component, Input, ElementRef, OnInit, DoCheck, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit, DoCheck {
  @Input() message: string;
  @Input() type: string;
  @Input() showMessage: boolean;
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  }
  ngDoCheck() {
    if (!this.showMessage) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    }
  }
}
