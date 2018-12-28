
import {throwError as observableThrowError,  Observable , Subject} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable , EventEmitter} from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs';

//MODELS
// import { User } from '../models/User.model'
import { Photo } from '../models/Photo.model'

@Injectable()
export class PhotoService {

  private baseUrl = `${environment.apiUrl}/api/photo`;
  private options ={withCredentials: true };

  constructor(private http: Http) {

  }

  getAll():Observable<Array<Photo>> {
    return this.http.get(`${this.baseUrl}/`,this.options).pipe(
            map(res => res.json()),
            catchError (this.handleError),);
  }
  getById(id):Observable<Photo>{
    return this.http.get(`${this.baseUrl}/${id}`,this.options).pipe(
            map(res=> res.json()),
            catchError(this.handleError),);
  }

  getMyPhotos():Observable<Array<Photo>>{
    return this.http.get(`${this.baseUrl}/myPhoto`,this.options).pipe(
            map(res => res.json()),
            catchError (this.handleError),);
  }

  getByLocation(id):Observable<Array<Photo>>{
    return this.http.get(`${this.baseUrl}/byLocation/${id}`,this.options).pipe(
            map(res => res.json()),
            catchError (this.handleError),);
  }

  getByUser(id):Observable<Array<Photo>>{
    return this.http.get(`${this.baseUrl}/byUser/${id}`,this.options).pipe(
            map(res => res.json()),
            catchError (this.handleError),);
  }

  add(photo):Observable<Photo>{
    return this.http.post(`${this.baseUrl}/${photo._location}`, photo, this.options).pipe(
          map(res=> res.json()),
          catchError(this.handleError),);
  }

  photoLocationId(locationId){
    console.log(locationId);
}

  protected handleError (error :Response | any ): Observable<any> {
    return observableThrowError (error.json().message);
  }


}
