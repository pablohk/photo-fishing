import { Component , OnInit , OnDestroy } from '@angular/core';

//SERVICES
import {AuthService} from './services/auth.service';
//MODELS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit , OnDestroy {
  title = 'app';
  error = String;

    constructor(public authService:AuthService) {
    }

     ngOnInit(){}

     ngOnDestroy(){
       this.authService.logout();
     }
}
