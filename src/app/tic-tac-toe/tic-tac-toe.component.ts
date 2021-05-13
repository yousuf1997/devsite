import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  row_1_col_1_O: boolean = false;
  row_1_col_2_O: boolean = false;
  row_1_col_3_O: boolean = false;

  row_2_col_1_O: boolean = false;
  row_2_col_2_O: boolean = false;
  row_2_col_3_O: boolean = false;

  row_3_col_1_O: boolean = false;
  row_3_col_2_O: boolean = false;
  row_3_col_3_O: boolean = false;

  row_1_col_1_X: boolean = false;
  row_1_col_2_X: boolean = false;
  row_1_col_3_X: boolean = false;

  row_2_col_1_X: boolean = false;
  row_2_col_2_X: boolean = false;
  row_2_col_3_X: boolean = false;

  row_3_col_1_X: boolean = false;
  row_3_col_2_X: boolean = false;
  row_3_col_3_X: boolean = false;

  filledColums?: string[];
  emptyColums?: string[];
  constructor() { }

  ngOnInit() {
    
    this.filledColums = new Array();

    this.emptyColums = [
      "row_1_col_1", "row_1_col_2", "row_1_col_3_O",
      "row_2_col_1", "row_2_col_2", "row_2_col_3_O",
      "row_3_col_1", "row_3_col_2", "row_3_col_3_O"
    ]

    
  
  }


  update(col){
    console.log("PRESSSSED " + col);
    this.row_3_col_3_O = true;
  }

}
