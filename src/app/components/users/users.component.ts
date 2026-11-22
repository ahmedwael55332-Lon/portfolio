import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any[] = [];

  socket$!: WebSocketSubject<any>;

  constructor(
    private userservices: UserService,
    private websocketService: WebsocketService
  ) {}

  ngOnInit() {
    this.getallusers();

    this.socket$ = this.websocketService.connect('ws://localhost:8080');

    this.socket$.subscribe({
      next: (data) => {
        console.log('Received:', data);
      },
      error: (error) => {
        console.log('Error:', error);
      },
      complete: () => {
        console.log('Closed');
      },
    });

    // subject
    const subject = new Subject();
    subject.next(1);
    subject.subscribe((data) => {
      console.log(data);
    });
    subject.next(2);
    subject.next(3);
    subject.complete();
    subject.next(4);

    // events notifications
    // behavior subject observable
    const behavior = new BehaviorSubject(1);
    behavior.subscribe((data) => {
      console.log(data);
    });

    behavior.next(2);
    behavior.next(3);
    behavior.complete();
    behavior.next(4);

    // loged in , logged out / dark mode ,light mode
    // replay subject

    const replay = new ReplaySubject(3);
    replay.next(1);
    replay.next(2);
    replay.next(3);
    replay.next(4);

    replay.subscribe((data) => {
      console.log(data);
    });
    replay.next(5);

    const async = new AsyncSubject();
    async.next(1);
    async.complete();
    // async.next(2)
    // async.next(3)
    // async.complete()

    async.subscribe((data) => {
      console.log(data);
    });
  }

  getallusers() {
    this.userservices.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}

// cold vs hot osbervable
// cold httpclient(),fom(),of(),time(),interval()

// hot subject,websocket,broadcast,eventlistener
// producer,observable,observer(next,error,complete)

// rxjs recactive extensions for javascript (observalbes operators)

// hot subject
