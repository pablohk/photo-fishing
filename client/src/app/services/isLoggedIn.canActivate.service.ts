import { CanActivate , ActivatedRouteSnapshot ,RouterStateSnapshot} from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { Router } from "@angular/router";
import { AuthService } from './auth.service';


const timeout = (nS) => new Promise((resolve) => setTimeout(resolve,nS * 1000));

@Injectable()
export class IsLoggedInService implements CanActivate {

  constructor(private authService:AuthService,
              private router: Router) { }

  canActivate( next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("Checking can activate");
    const isAuth= this.authService.isAuthenticated();
    if(!isAuth){
       this.router.navigate(['login',{error : "Unauthorized permisson. Please Logged or "}]);
    }
    return isAuth;
  }
    // if(this.authService.getUser()){
    //   return true;
    // }else {
    //   this.router.navigate(['login',{error : "Unauthorized permisson. Please Logged or "}]);
    //   //alert("You are not logged");
    //   return false;
    // }

    //return this.authService.getUser() ? true : false;

  //}
}
