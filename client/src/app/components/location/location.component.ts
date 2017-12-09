import { Component, OnInit ,  NgModule} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AgmMap } from '@agm/core';

// SERVICES
import { AuthService } from '../../services/auth.service';
import { LocationService } from '../../services/location.service';
import { PhotoService } from '../../services/photo.service';

// MODELS
import { Location } from '../../models/Location.model';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [LocationService ]
})

export class LocationComponent implements OnInit {

  latInit: Number;
  lonInit: Number;
  zoom :number ;

  private location : Location;
  private ListLocation : Array<Location>;
  private error: String;
  user: User;

  constructor( private authService : AuthService,
               private route: ActivatedRoute,
               private locationService : LocationService) {
       this.user = this.authService.getUser();
       this.authService.getLoginEventEmitter()
         .subscribe( user => this.user = user );
  }

  ngOnInit() {

    this.setCurrentPosition();

      this.locationService.getAll().subscribe(
        (items)=> {this.ListLocation=items},
        (err)=> {this.error=err.message}
      );
    }

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
    }


 mapClicked($event) {
   console.log($event.coords);
 }

 // photoList(id){
 //   console.log("ir listado de fotos");
 // }
}
