import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loaded = 'recipe';

  onNavigate(feature: string) {
    this.loaded = feature;
  }
}
