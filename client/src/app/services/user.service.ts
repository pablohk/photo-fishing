
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';



//MODELS
import { User } from '../models/User.model'


@Injectable()
export class UserService {
  private baseUrl = `${environment.apiUrl}/api/user`;
  private options ={withCredentials: true };

  userP: User;

  constructor(private http: Http) {}

  getAll():Observable<Array<User>> {
    return this.http.get(`${this.baseUrl}/`,this.options).pipe(
            map(res => res.json()),
            catchError (this.handleError),);
  }
  getById(id):Observable<User>{
    return this.http.get(`${this.baseUrl}/${id}`,this.options).pipe(
            map(res=> res.json()),
            catchError(this.handleError),);
  }

   protected handleError (error :Response | any ): Observable<any> {
     console.log( error );
     return observableThrowError (error.json().message);
   }

}
