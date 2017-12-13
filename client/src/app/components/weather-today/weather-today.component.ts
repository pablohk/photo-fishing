import { Component, OnInit, NgModule } from '@angular/core';

// SERVICES
import { WeatherService } from '../../services/weather.service';

// MODELS
import { Weather } from '../../models/Weather.model'

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.css'],
  providers : [ WeatherService ]
})
export class WeatherTodayComponent implements OnInit {

  public weather : Weather;
  public latInit: Number;
  public lonInit: Number;
  public error: String;

  constructor( public weatherService : WeatherService) {}

  ngOnInit() {

    this.getCurrentPosition()
      .then ((coord:any)=>{
        this.latInit=coord.latitude;
        this.lonInit=coord.longitude;
        this.weatherService.getToday(this.latInit, this.lonInit).subscribe(
          (item)=>{this.weather = item},
          (err)=> {this.error=err.message});
         })
      .catch( (err)=> this.error=err);
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
