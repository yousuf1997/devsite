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
  recovered = 0;
  deaths = 0;
  confirmed = 0;


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
    this.updateCases();
    let time2 = setInterval(() =>{ if(this.updatedMinutes != -1) this.updatedMinutes++}, 1000)
    let timerId = setInterval(() => {
      this.updateCases();
    }
    , 1000 * 60);
  }

  updateCases() {
    this.service.getTotalCovidCases().subscribe(
      (data) => {
        this.confirmed = data.summaryStats.global.confirmed;
        this.deaths = data.summaryStats.global.deaths;
        this.recovered = data.summaryStats.global.recovered;

        console.log(data.summaryStats);
      }
    )
  }

}
