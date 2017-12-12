import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AgmMap } from '@agm/core';

//SERVICES
import { LocationService } from '../../services/location.service';
import { AuthService } from '../../services/auth.service';

//MODELS
import { Location } from '../../models/Location.model'


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

  private location : Location=new Location();
  private error: String;

  constructor( private authService : AuthService,
               private route: ActivatedRoute,
               private router: Router,
               private locationService : LocationService) {}

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
    }
  }

  onSubmitLocation(locatForm){
    this.location.lat=this.newLat;
    this.location.lon=this.newLon;
    console.log(this.location);
    this.locationService.add(this.location).subscribe(
      ()=>{
          locatForm.reset();
          this.router.navigate(['location']);
          },
      (err)=> {this.error=err;}
    );
  }

  mapClicked($event) {
    console.log($event.coords);
   this.newLat= $event.coords.lat;
   this.newLon= $event.coords.lng;
  }

}
