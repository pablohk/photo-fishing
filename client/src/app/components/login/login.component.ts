import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

// MODELS

// SERVICES
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: String;
  public formInfo={
    username:'',
    password:''
  }

  constructor(  public authService: AuthService,
                public router: Router,
                public route : ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
    this.error = params['error'];})

    this.route.queryParams.subscribe(params => {
    this.error = params['error'];})

    this.authService.logout();

  }

  onSubmitLogin(loginForm) {
    this.authService.login(this.formInfo).subscribe(
      (user) => {
        this.error=null;
        loginForm.reset();
        this.router.navigate(['/home']);
      },
      (error) => { this.error = error;}
    );
  }
}
