import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

// MODELS
import { User } from '../../models/User.model';

// SERVICES
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  error: String;
  formInfo={
    username:'',
    password:''
  }
  constructor(  private authService: AuthService,
                private router: Router,
                public route : ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.error = params['error'];})

    this.route.queryParams.subscribe(params => {
    this.error = params['error'];})

    this.user = this.authService.getUser();
    this.authService.getLoginEventEmitter()
      .subscribe( user => this.user = user );
  }

  onSubmitLogin(loginForm) {
    this.authService.login(this.formInfo).subscribe(
      (user) => {
        this.user=user;
        this.error=null;
        loginForm.reset();
        this.router.navigate(['home']);
      },
      (error) => { this.error = error;}
    );
  }


  private successCb(user) {
    this.user = user;
    this.error = null;
  }

}
