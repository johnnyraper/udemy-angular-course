import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-group',
  templateUrl: './servers-group.component.html',
  styleUrls: ['./servers-group.component.css']
})
export class ServersGroupComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Johnny Server';
  serverCreated = false;
  serversArray = ['Johnny Server v1', 'Johnny Server v2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serversArray.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
