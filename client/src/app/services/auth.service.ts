
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable , EventEmitter} from '@angular/core';
import { Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'



//MODELS
import { User } from '../models/User.model'

// SERVICES

@Injectable()
export class AuthService {
  private baseUrl = `${environment.apiUrl}/api`;
  private options ={withCredentials: true };

  user: User;
  userLoginEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: Http ) {
      this.isLoggedIn().subscribe();
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
     this.userLoginEvent.emit(this.user);
     return user;
   }

   login(user):Observable<User>  {
     return this.http.post(`${this.baseUrl}/login`, user,this.options).pipe(
       map(res => res.json()),
       map(user => this.emitUserLoginEvent(user)),
       catchError(this.handleError),);
   }

   signup(user) {
    return this.http.post(`${this.baseUrl}/signup`, user, this.options).pipe(
      map(res => res.json()),
      map( user =>this.emitUserLoginEvent(user)),
      catchError(this.handleError),);
  }


  logout() {
    return this.http.get(`${this.baseUrl}/logout`, this.options).pipe(
      map(res => res.json()),
      map(user => this.emitUserLoginEvent(undefined)),
      catchError(this.handleError),);
  }

  isLoggedIn() {
    return this.http.get(`${this.baseUrl}/loggedin`,this.options).pipe(
    map(res => res.json()),
    map(user => this.emitUserLoginEvent(user)),
    catchError(this.handleError),);
  }



  protected handleError (error :Response | any ): Observable<any> {
    return observableThrowError (error.json().message);
  }

  handleUser(obj) {
    this.user = obj;
    this.userLoginEvent.emit(this.user);
    return this.user;
  }

}
