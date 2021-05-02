import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worksamples',
  templateUrl: './worksamples.component.html',
  styleUrls: ['./worksamples.component.css']
})
export class WorksamplesComponent implements OnInit {

  covidDashBoardTechStack = ['AngularJs', 'Bootstrap', 'REST API'];
  sarfDuplicatorTechStack = ['Javascript','HTML','Bootstrap','REST API'];
  pinItTechStack = ['Android Studio','Java','SQL Lite'];
  tamilDictionaryTechStack = ['Android Studio','Java', 'JSON'];
  constructor() { }

  ngOnInit() {
  }

}
