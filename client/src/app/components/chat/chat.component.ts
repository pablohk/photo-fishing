import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  // providers: [ ChatService ]
})
export class ChatComponent implements OnInit {

  constructor(private chatService : ChatService) { }

  ngOnInit() {
  }

}
