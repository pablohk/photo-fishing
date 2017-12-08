import { Injectable , EventEmitter} from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable , Subject} from 'rxjs/Rx';
import 'rxjs';

//MODELS
import { User } from '../models/User.model'
import { Photo } from '../models/Photo.model'

@Injectable()
export class PhotoService {

  private baseUrl = `${environment.apiUrl}/api/photo`;
  private options ={withCredentials: true };

  private user: User;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: Http) {

  }

  getAll():Observable<Array<Photo>> {
    return this.http.get(`${this.baseUrl}/`,this.options)
            .map(res => res.json())
            .catch (this.handleError);
  }
  getById(id):Observable<Photo>{
    return this.http.get(`${this.baseUrl}/${id}`,this.options)
            .map(res=> res.json())
            .catch(this.handleError);
  }

  add(id,photo):Observable<Photo>{
    console.log("---- En el servicio photo: add");
    console.log(id);
    console.log(photo);
    return this.http.post(`${this.baseUrl}/${id}`, photo, this.options)
          .map(res=> res.json())
          .catch(this.handleError);
  }

  photoLocationId(locationId){
    console.log(locationId);
}

  protected handleError (error :Response | any ): Observable<any> {
    console.log( error );
    return Observable.throw (error.json().message);
  }


}
