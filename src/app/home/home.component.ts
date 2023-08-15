import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tags = ['Java','Spring Boot','Android Development','Git','C++',"AngularJs",'SQL','Python']
  backgroundInvisible: boolean = false;
  invisibleGuideText = 'Check to see the background.'

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  eventListener(event){
    if(event.srcElement.checked){
       this.backgroundInvisible = true;
       this.invisibleGuideText = 'Uncheck to see the content.'

    } else {
      this.invisibleGuideText = 'Check to see the background.'
      this.backgroundInvisible = false;
    }
  }

}
