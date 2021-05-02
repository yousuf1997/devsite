import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tags = ['Java','Spring Boot','Android Development','Git','C++',"AngularJs",'SQL','Python']

  constructor() { }

  ngOnInit() {
  }

}
