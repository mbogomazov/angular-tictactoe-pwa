import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares!: ('X' | 'O')[];
  xIsNext!: boolean;
  winner!: string | null;
  gameFinished: boolean = false;
  constructor() {

  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  ngOnInit() {
    this.startNewGame();
  }

  startNewGame() {
    this.squares = new Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.gameFinished = false;
  }

  makeMove(idx: number) {
    if(!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
    if(this.winner !== null) {
      this.gameFinished = true;
    }
  }

  calculateWinner() {
    const linesForWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for(let line of linesForWin) {
      const [f, s, t] = line;
      if(
        this.squares[f] &&
        this.squares[f] === this.squares[s] &&
        this.squares[s] === this.squares[t]
      )
        return this.squares[f];
    }
    return null;
  }
}
