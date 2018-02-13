import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AgmMap } from '@agm/core';

//SERVICES
import { LocationService } from '../../services/location.service';
import { AuthService } from '../../services/auth.service';

//MODELS
import { Location } from '../../models/Location.model'

const LAT_DEFAULT=40.392283;
const LON_DEFAULT=-3.698536;

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
  providers: [LocationService]
})

export class AddLocationComponent implements OnInit {

  latInit: Number;
  lonInit: Number;
  zoom :number ;
  newLat: number;
  newLon: number;

  public location : Location=new Location();
  public error: String;

  constructor( public authService : AuthService,
               public route: ActivatedRoute,
               public router: Router,
               public locationService : LocationService) {}

  ngOnInit() {
    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latInit = position.coords.latitude;
        this.lonInit = position.coords.longitude;
        this.zoom = 13;
      });
    }else{
      this.latInit=LAT_DEFAULT;
      this.lonInit=LON_DEFAULT;
      this.zoom = 13;
    }
  }

  onSubmitLocation(locatForm){
    this.location.lat=this.newLat;
    this.location.lon=this.newLon;
    this.locationService.add(this.location).subscribe(
      ()=>{
          locatForm.reset();
          this.router.navigate(['location']);
          },
      (err)=> {this.error=err;}
    );
  }

  mapClicked($event) {
   this.newLat= $event.coords.lat;
   this.newLon= $event.coords.lng;
  }

}
