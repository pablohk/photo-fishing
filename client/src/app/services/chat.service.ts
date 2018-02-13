import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';

// MODELS
// import { User } from '../models/User.model';

//SERVICES
import { AuthService } from './auth.service';

interface Message{
  message:string;
  userChat:any;
  otherUser:any;
  created: Date;
}

@Injectable()
export class ChatService {
  socket:any;
  messages:Array<Message> = [];

  constructor( private authService : AuthService){
    this.socket = io.connect(`${environment.apiUrl}`);
    this.socket.on('recibe-message', function(data:any){
      this.messages.push({
        userChat: false,
        message: data.message.m,
        created:  new Date(),
        otherUser:data.message.usr
      })
    }.bind(this));
  }

  sendMessage(m){
    let usr = this.authService.user.username;
    this.socket.emit('send-message',{
      message: {m,usr}
    });
    this.messages.push({
      userChat: `${this.authService.user.username}`,
      message: m,
      created:  new Date(),
      otherUser:false
    })
  }
}
