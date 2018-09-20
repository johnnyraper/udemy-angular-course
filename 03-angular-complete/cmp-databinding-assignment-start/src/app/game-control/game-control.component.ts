import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  isGameRunning = false;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    // if (this.interval) {
    //   clearInterval(this.interval);
    // }

    if (this.isGameRunning) {
      return;
    }

    this.isGameRunning = true;


    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);

    this.isGameRunning = false;

  }

}
