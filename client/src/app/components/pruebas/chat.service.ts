import { Injectable, EventEmitter } from '@angular/core';
import * as io from 'socket.io-client';
const BASE_DOMAIN = 'http://localhost:3000';

interface Message{
  message:string;
  user:string;
}

@Injectable()
export class ChatService {
  socket:any;
  messages:Array<Message> = [];
  constructor(){
    console.log("Created chat service");
    this.socket = io.connect(`${BASE_DOMAIN}`);
    this.socket.on('recibe-message', function(data:any){
      console.log(`Mensaje Recibido: "${data.message}"`);
      this.messages.push({
        user: 'Anonimo',
        message:data.message
      })
    }.bind(this));
  }

  sendMessage(m){
    console.log(`Mandando mensaje: "${m}"`);
    this.socket.emit('send-message',{
      message:m
    });
    this.messages.push({
      user: 'Yo',
      message:m
    })
  }
}
