import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public message = '';
  public messages: string[] = [];
  public hubConnection: HubConnection;

  ngOnInit() {
    this.hubConnection = new HubConnectionBuilder().withUrl('/echo').build();
    this.hubConnection.on('send', (msg) => {
      this.messages.push(msg);
    });
    this.hubConnection.start().then(
      () => console.log('Connection Started.')
    ).catch( err => console.error(err));
  }

  public echo() {
    this.hubConnection.invoke('Echo', this.message);
  }
}
