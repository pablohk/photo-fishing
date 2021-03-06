
import {throwError as observableThrowError,  Observable , Subject} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable , EventEmitter} from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs';
// import { User } from '../models/User.model'
import { Location } from '../models/Location.model'

@Injectable()
export class LocationService {
  private baseUrl = `${environment.apiUrl}/api/location`;
  private options ={withCredentials: true };

  // private user: User;
  // private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: Http) {

  }

  getAll():Observable<Array<Location>> {
    return this.http.get(`${this.baseUrl}/`,this.options).pipe(
            map(res => res.json()),
            catchError (this.handleError),);
  }

  getMyLocation():Observable<Array<Location>> {
    return this.http.get(`${this.baseUrl}/myLocation`,this.options).pipe(
            map(res => res.json()),
            catchError (this.handleError),);
  }

  getById(id):Observable<Location>{
    return this.http.get(`${this.baseUrl}/${id}`,this.options).pipe(
            map(res=> res.json()),
            catchError(this.handleError),);
  }

  add(location):Observable<Location>{
    console.log(location);
    return this.http.post(`${this.baseUrl}/`,location,this.options).pipe(
        map(res=> res.json()),
        catchError( this.handleError),);
  }

  protected handleError (error :Response | any ): Observable<any> {
    console.log( error );
    return observableThrowError (error.json().message);
  }


}
