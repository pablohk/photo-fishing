import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  error: String;

  constructor(private authService : AuthService,
              private route: ActivatedRoute,
              private router: Router) {
    this.user = this.authService.getUser();
    this.authService.getLoginEventEmitter()
      .subscribe( user => this.user = user );
  }

  ngOnInit() {
    this.route.params
     .subscribe((params) =>{
       if(params['error'] != undefined){
        this.error = String(params['error'])
      }
      else this.error=null;
      });
  }

}
