import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  username = '';

  detailsState = false;

  detailsText = 'This is a paragraph';

  log = [];

  onToggleDetails() {
    this.detailsState = !this.detailsState;

    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
