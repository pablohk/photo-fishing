import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user: User;
  error: String;

  constructor(private authService : AuthService,
              private route: ActivatedRoute) {
      this.user = this.authService.getUser();
      this.authService.getLoginEventEmitter()
        .subscribe( user => this.user = user );

      this.route.params.subscribe(params => {
      this.error = params['error'];})

      this.route.queryParams.subscribe(params => {
      this.error = params['error'];})
  }

  ngOnInit() {
  }

}
