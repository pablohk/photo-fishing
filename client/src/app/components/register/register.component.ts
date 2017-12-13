import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public error: String;
  public formInfo={
    username:'',
    password:'',
    email:''
  }
  constructor(  public authService: AuthService,
                public router: Router) {}

  ngOnInit() {}

  onSubmitSign(signForm) {
    this.authService.signup(this.formInfo).subscribe(
      (user) => {
        this.error=null;
        signForm.reset();
        this.router.navigate(['home']);
      },
      (error) => { this.error = error;}
    );
  }
}
