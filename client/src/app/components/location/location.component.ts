import { Component, OnInit ,  NgModule} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AgmMap } from '@agm/core';

// SERVICES
import { LocationService } from '../../services/location.service';
import { PhotoService } from '../../services/photo.service';

// MODELS
import { Location } from '../../models/Location.model';

const LAT_DEFAULT=40.392283;
const LON_DEFAULT=-3.698536;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [LocationService ]
})

export class LocationComponent implements OnInit {

  public latInit: Number;
  public lonInit: Number;
  public zoom :number ;

  public location : Location;
  public ListLocation : Array<Location>;
  error: String;


  constructor( public route: ActivatedRoute,
               public locationService : LocationService) {

        this.setCurrentPosition();

        this.locationService.getMyLocation().subscribe(
          (items)=> {this.ListLocation=items},
          (err)=> {this.error=err.message});
    }

    ngOnInit() {}

    selectLocation(id: String): void {
        this.locationService.getById(id).subscribe(
          (item)=>
            {
              this.location=item;
              this.latInit=item.lat;
              this.lonInit=item.lon;
            },
          (err)=> {this.error=err}
        );
    }

    private setCurrentPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latInit = position.coords.latitude;
          this.lonInit = position.coords.longitude;
          this.zoom = 13;
        });
      }
      else{
          this.latInit=LAT_DEFAULT;
          this.lonInit=LON_DEFAULT;
          this.zoom = 13;
      }
    }

}
