import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable , OnInit }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { Router } from "@angular/router";

//MODELS
import { User } from '../models/User.model';

//SERVICES
import { AuthService } from './auth.service';


@Injectable()
export class IsLoggedInService implements CanActivate , OnInit{
  user:User;
  constructor(private authService : AuthService,
              private router: Router) {

     }

  ngOnInit() {
    this.authService.getLoginEventEmitter()
      .subscribe( user => this.user =  user );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    // console.log("Checking can activate");
    console.log(this.user);
    if(this.user){
       return true;
    }else{
      this.router.navigate(['/login'],{ queryParams: {error : "Unauthorized permisson. Please Logged "}});;
      return false;
    }
  }
}
