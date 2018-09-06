import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(outputNumber: number) {
    if (outputNumber % 2 === 0) {
      this.evenNumbers.push(outputNumber);
    } else {
      this.oddNumbers.push(outputNumber);
    }
  }
}
