import { Injectable , EventEmitter} from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable , Subject} from 'rxjs/Rx';
import 'rxjs';

// MODELS
import { User } from '../models/User.model';
import { Weather } from '../models/Weather.model';
import { Forecast } from '../models/Forecast.model';

@Injectable()
export class WeatherService {
  private baseUrl = `${environment.apiUrl}/api/weather`;
  private options ={withCredentials: true };

  private user: User;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  private today: Weather;
  private forecast :Array<Weather>;

  constructor(private http: Http) {

  }

  getToday(lat,lon):Observable<Weather> {
    const loc= {"lat":lat, "lon":lon};
    return this.http.post(`${this.baseUrl}/today`, loc , this.options)
            .map(res => res.json())
            .catch (this.handleError);
  }

  getForecast(lat,lon):Observable<Array<Forecast>> {
    const loc= {"lat":lat, "lon":lon};
    return this.http.post(`${this.baseUrl}/forecast`, loc , this.options)
            .map(res => res.json())
            .catch (this.handleError);
  }


  protected handleError (error :Response | any ): Observable<any> {
    console.log( error );
    return Observable.throw (error.json().message);
  }


}
