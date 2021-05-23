import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  visiblity : boolean;
  description : string;
  tags = ['Java','Spring Boot','Android Development','Git','C++','AngularJs','SQL','Python'];



  updatedMinutes = -1

  resultUpdated = false
  constructor(private breakpointObserver : BreakpointObserver, private service: GeneralService) {
    breakpointObserver.observe([
      '(min-width: 1024px)'
        ]).subscribe(result => {
          if (result.matches) {
             this.visiblity = false;
          } else {
            // if necessary:
            this.visiblity = true;
          }
        });
  }

  ngOnInit() {
 
  }



}
