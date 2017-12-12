import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//MODELS
import { User } from '../models/User.model'


@Injectable()
export class UserService {
  private baseUrl = `${environment.apiUrl}/api/user`;
  private options ={withCredentials: true };

  userP: User;

  constructor(private http: Http) {}

  getAll():Observable<Array<User>> {
    return this.http.get(`${this.baseUrl}/`,this.options)
            .map(res => res.json())
            .catch (this.handleError);
  }
  getById(id):Observable<User>{
    return this.http.get(`${this.baseUrl}/${id}`,this.options)
            .map(res=> res.json())
            .catch(this.handleError);
  }

   protected handleError (error :Response | any ): Observable<any> {
     console.log( error );
     return Observable.throw (error.json().message);
   }

}
