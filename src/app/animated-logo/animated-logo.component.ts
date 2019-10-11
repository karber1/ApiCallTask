import { Component, OnInit, AfterViewInit } from '@angular/core';
import {trigger, state, style, animate, transition, } from '@angular/animations'

@Component({
  selector: 'app-animated-logo',
  templateUrl: './animated-logo.component.html',
  styleUrls: ['./animated-logo.component.scss'],
  animations: [
    trigger('logoTrigger', [
      state('logoStart', style({
        color: 'black',
        transform: 'translateX(-50%)'
      })),
      state('logoEnd', style({
        color: 'lightgray',
        transform: 'translateX(0)',
      })),
      transition('logoStart => logoEnd', animate('1000ms ease-out'))
    ])
  ]
})
export class AnimatedLogoComponent implements AfterViewInit {

  state: string = 'logoStart';

  constructor() { }

  ngAfterViewInit(){
    this.state = 'logoEnd';
  }
  
  ngOnInit(){

  }

}
