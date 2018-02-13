import { Injectable , EventEmitter} from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable , Subject} from 'rxjs/Rx';
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
    return this.http.get(`${this.baseUrl}/`,this.options)
            .map(res => res.json())
            .catch (this.handleError);
  }

  getMyRemark():Observable<Array<Remark>> {
    return this.http.get(`${this.baseUrl}/myRemark`,this.options)
            .map(res => res.json())
            .catch (this.handleError);
  }

  getByUser(id):Observable<Array<Remark>>{
    return this.http.get(`${this.baseUrl}/byUser/${id}`,this.options)
            .map(res=> res.json())
            .catch(this.handleError);
  }

  getByLocation(id):Observable<Array<Remark>>{
    return this.http.get(`${this.baseUrl}/byLocation/${id}`,this.options)
            .map(res=> res.json())
            .catch(this.handleError);
  }

  add(id, contain):Observable<Remark>{
    console.log(id);
    return this.http.post(`${this.baseUrl}/${id}`,{contain} ,this.options)
        .map(res=> res.json())
        .catch( this.handleError);
  }

  protected handleError (error :Response | any ): Observable<any> {
    console.log( error );
    return Observable.throw (error.json().message);
  }


}
