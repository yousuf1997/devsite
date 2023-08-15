import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  visibleState;
  closeMenu = false;

  constructor() { }

  ngOnInit(): void {
  }


  event(str) {
    if (str == 'menu') {
      this.closeMenu = false
      this.visibleState = ''
    } else {
      this.closeMenu = true
    }
    this.visibleState = 'movie'
  }

  isMovieVisible() {
    return this.visibleState == 'movie'
  }
}
