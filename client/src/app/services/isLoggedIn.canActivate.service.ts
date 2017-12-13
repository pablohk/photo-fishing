import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable , OnInit }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { ActivatedRoute, Router } from "@angular/router";

//MODELS
import { User } from '../models/User.model';

//SERVICES
import { AuthService } from './auth.service';


@Injectable()
export class IsLoggedInService implements CanActivate , OnInit{

  constructor(private authService : AuthService,
              private router: Router) {
              this.canActivate();
            }

  ngOnInit() {}

  canActivate():boolean {
    if(this.authService.getUser())
     { return true; }
     else{
      this.router.navigate(['/login'],{ queryParams: {error : "Unauthorized permisson. Please Logged "}});
      return false;}
  }

}
