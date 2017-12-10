import { Component , OnInit , OnDestroy } from '@angular/core';

//SERVICES
import {AuthService} from './services/auth.service';

//MODELS
import { User } from './models/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit , OnDestroy {
  title = 'app';
  user : User;
  error = String;

    constructor(public authService:AuthService) {
      // this.authService.getLoginEventEmitter().subscribe(
      // (user) => {this.user = user;},
      // (err) => {this.error = err;});
      //      console.log(this.user);
    }

     ngOnInit(){
       this.authService.getLoginEventEmitter().subscribe(
       (user) => {this.user = user;},
       (err) => {this.error = err;});
            console.log(this.user);
     }

     ngOnDestroy(){
       this.authService.logout();
     }
}
