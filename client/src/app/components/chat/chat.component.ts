import { Component, OnInit, ViewChild, AfterViewChecked, ElementRef } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') public myScrollContainer: ElementRef;
  public m: String;
  
  constructor(public chatService : ChatService) { }

  ngOnInit() { }

  ngAfterViewChecked() {
    this.scrollToBottom();
    }

    scrollToBottom(): void {
       try {
           this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
       } catch(err) { }
   }
}
