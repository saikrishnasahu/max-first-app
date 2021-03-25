import { Component, OnInit } from '@angular/core';

@Component({
  // can be ommited - routing
  // similar to css-selector - 1
  selector: 'app-servers',
  // similar to css-attribute - 2
  // selector: '[app-servers]',
  // similar to css-class - 3
  // selector: '.app-servers',
  // mandatory
  // external file
  templateUrl: './servers.component.html',
  // in line - single line
  // template: '<app-server></app-server><app-server></app-server>',
  // in line - multi line
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  // can be ommited
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Servers Created';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
