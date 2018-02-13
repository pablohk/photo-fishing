import { Injectable , EventEmitter} from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable , Subject} from 'rxjs/Rx';
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
    return this.http.get(`${this.baseUrl}/`,this.options)
            .map(res => res.json())
            .catch (this.handleError);
  }
  getById(id):Observable<Photo>{
    return this.http.get(`${this.baseUrl}/${id}`,this.options)
            .map(res=> res.json())
            .catch(this.handleError);
  }

  getMyPhotos():Observable<Array<Photo>>{
    return this.http.get(`${this.baseUrl}/myPhoto`,this.options)
            .map(res => res.json())
            .catch (this.handleError);
  }

  getByLocation(id):Observable<Array<Photo>>{
    return this.http.get(`${this.baseUrl}/byLocation/${id}`,this.options)
            .map(res => res.json())
            .catch (this.handleError);
  }

  getByUser(id):Observable<Array<Photo>>{
    return this.http.get(`${this.baseUrl}/byUser/${id}`,this.options)
            .map(res => res.json())
            .catch (this.handleError);
  }

  add(photo):Observable<Photo>{
    return this.http.post(`${this.baseUrl}/${photo._location}`, photo, this.options)
          .map(res=> res.json())
          .catch(this.handleError);
  }

  photoLocationId(locationId){
    console.log(locationId);
}

  protected handleError (error :Response | any ): Observable<any> {
    return Observable.throw (error.json().message);
  }


}
