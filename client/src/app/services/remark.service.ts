
import {throwError as observableThrowError,  Observable , Subject} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable , EventEmitter} from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs';

//MODELS
// import { User } from '../models/User.model'
import { Location } from '../models/Location.model'
import { Remark } from '../models/Remark.model'

@Injectable()
export class RemarkService {
  private baseUrl = `${environment.apiUrl}/api/remark`;
  private options ={withCredentials: true };

  constructor(private http: Http) {

  }

  getAll():Observable<Array<Remark>> {
    return this.http.get(`${this.baseUrl}/`,this.options).pipe(
            map(res => res.json()),
            catchError (this.handleError),);
  }

  getMyRemark():Observable<Array<Remark>> {
    return this.http.get(`${this.baseUrl}/myRemark`,this.options).pipe(
            map(res => res.json()),
            catchError (this.handleError),);
  }

  getByUser(id):Observable<Array<Remark>>{
    return this.http.get(`${this.baseUrl}/byUser/${id}`,this.options).pipe(
            map(res=> res.json()),
            catchError(this.handleError),);
  }

  getByLocation(id):Observable<Array<Remark>>{
    return this.http.get(`${this.baseUrl}/byLocation/${id}`,this.options).pipe(
            map(res=> res.json()),
            catchError(this.handleError),);
  }

  add(id, contain):Observable<Remark>{
    console.log(id);
    return this.http.post(`${this.baseUrl}/${id}`,{contain} ,this.options).pipe(
        map(res=> res.json()),
        catchError( this.handleError),);
  }

  protected handleError (error :Response | any ): Observable<any> {
    console.log( error );
    return observableThrowError (error.json().message);
  }


}
