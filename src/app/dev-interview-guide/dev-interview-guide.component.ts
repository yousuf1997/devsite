import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dev-interview-guide',
  templateUrl: './dev-interview-guide.component.html',
  styleUrls: ['./dev-interview-guide.component.css']
})
export class DevInterviewGuideComponent implements OnInit {

  @Input()
  url: string = "https://devmohamed.gitbook.io/topics/";
  urlSafe: SafeResourceUrl;
  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
