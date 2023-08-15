import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { GeneralService } from '../general.service';
import GoTrue from 'gotrue-js';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  visiblity : boolean;
  description : string;
  tags = ['Java','Spring Boot','Android Development','Git','C++','AngularJs','SQL','Python'];
  myName: string;
  quoteStr: string;
  author: string;
  quotes: { quote: string; author: string }[] = [
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "Don't cry because it's over, smile because it happened.",
      author: "Dr. Seuss",
    },
  ];
  

  updatedMinutes = -1
  auth: GoTrue;
  
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
      let index = getRandomInt(10);
      console.log("Index" ,index)
      this.quoteStr = this.quotes[index].quote;
      this.author = this.quotes[index].author
    }



}
function delay(arg0: number) {
  throw new Error('Function not implemented.');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
