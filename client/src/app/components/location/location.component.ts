import { Component, OnInit ,  NgModule} from '@angular/core';
//import { ActivatedRoute , Router} from '@angular/router';
import { AgmMap } from '@agm/core';

// SERVICES
import { AuthService } from '../../services/auth.service';
import { LocationService } from '../../services/location.service';
import { PhotoService } from '../../services/photo.service';

// MODELS
import { Location } from '../../models/Location.model'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [LocationService ]
})

export class LocationComponent implements OnInit {

  latInit: number = 40.75693;
  lonInit: number = -3.621271;;
  backgroundColor:'#000';

  private location : Location;
  private ListLocation : Array<Location>;
  private error: String;


  constructor( private authService : AuthService,
               private locationService : LocationService) { }

  ngOnInit() {
      this.locationService.getAll().subscribe(
        (items)=> {this.ListLocation=items},
        (err)=> {this.error=err.message}
      );
    }

    selectLocation(id: String): void {
        this.locationService.getById(id).subscribe(
          (item)=> {this.location=item},
          (err)=> {this.error=err}
        );
    }

 mapClicked($event) {
   console.log($event.coords);
 }

 photoList(id){
   console.log("ir listado de fotos");
 }
}
