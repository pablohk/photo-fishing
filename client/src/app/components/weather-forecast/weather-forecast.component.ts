import { Component, OnInit } from '@angular/core';

// SERVICES
import { AuthService } from '../../services/auth.service';
import { WeatherService } from '../../services/weather.service';
import { LocationService } from '../../services/location.service';

// MODELS
import { Forecast } from '../../models/Forecast.model';
import { Location } from '../../models/Location.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
  providers: [ WeatherService , LocationService ]
})
export class WeatherForecastComponent implements OnInit {
  private forecast : Array<Forecast>;
  private ListLocation : Array<Location>;
  private location : Location;

  latInit: Number;
  lonInit: Number;
  error: String;

  constructor( private weatherService : WeatherService,
               private locationService : LocationService) { }

  ngOnInit() {
    this.locationService.getAll().subscribe(
      (items)=> {this.ListLocation=items},
      (err)=> {this.error=err.message}
    );

    this.getCurrentPosition()
      .then ((coord:any)=>{
        this.latInit=coord.latitude;
        this.lonInit=coord.longitude;
        this.getForecast();
         })
      .catch( (err)=> this.error=err);

  }

    selectLocation(id: String): void {
        this.locationService.getById(id).subscribe(
          (item)=>
            {
              this.location=item;
              this.latInit=item.lat;
              this.lonInit=item.lon;
              this.getForecast();
            },
          (err)=> {this.error=err}
        );
    }
private getForecast (){
  this.weatherService.getForecast(this.latInit, this.lonInit).subscribe(
    (items)=>{this.forecast = items},
    (err)=> {this.error=err.message});
  }

  private getCurrentPosition() {
    return new Promise( ( resolve, reject ) => {
      navigator.geolocation.getCurrentPosition( ( position ) => {
        let  latitude  = position.coords.latitude;
        let  longitude = position.coords.longitude;
      resolve( {latitude, longitude} );}
      , () => { reject( 'We could not get your location.' ); } );
  });
}

}
