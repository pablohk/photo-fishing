import { Injectable , EventEmitter} from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//MODELS
import { User } from '../models/User.model'

// SERVICES

@Injectable()
export class AuthService {
  private baseUrl = `${environment.apiUrl}/api`;
  private options ={withCredentials: true };

  user: User;
  state: any;
  userLoginEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: Http ) {
      this.isLoggedIn().subscribe();
      this.state= this.user !== undefined && this.user !== null ? true : false;

  }

  public getLoginEventEmitter():EventEmitter<any>{
     return this.userLoginEvent;

   }

   public isAuthenticated() {
     return this.user !== null && this.user !== undefined;
   }

   public getUser(){ return this.user; }

   private emitUserLoginEvent(user){
     this.user = user;
     this.userLoginEvent.emit(user);
     console.log("dentro de emitUSerLoginEvent");
     //console.log(this.user);
     return user;
   }

   login(user):Observable<User>  {
     return this.http.post(`${this.baseUrl}/login`, user,this.options)
       .map(res => res.json())
       .map(user => this.emitUserLoginEvent(user))
       .catch(this.handleError);
   }

   signup(user) {
    return this.http.post(`${this.baseUrl}/signup`, user, this.options)
      .map(res => res.json())
      .map( user =>this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }


  logout() {
    return this.http.get(`${this.baseUrl}/logout`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(undefined))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.baseUrl}/loggedin`,this.options)
    .map(res => res.json())
    .map(user => this.emitUserLoginEvent(user))
    .catch(this.handleError);
  }



  protected handleError (error :Response | any ): Observable<any> {
    console.log( error );
    return Observable.throw (error.json().message);
  }

  handleUser(obj) {
    this.user = obj;
    this.userLoginEvent.emit(this.user);
    return this.user;
  }

}
