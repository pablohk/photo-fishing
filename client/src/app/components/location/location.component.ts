import { Component, OnInit ,  NgModule} from '@angular/core';
//import { ActivatedRoute , Router} from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/Location.model'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [LocationService]
})

export class LocationComponent implements OnInit {

  latInit: number = 40.75693;
  lonInit: number = -3.621271;;

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

 mapClicked($event) {
   console.log($event.coords);
 }
}
