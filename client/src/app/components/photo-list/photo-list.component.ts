import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// SERVICES
import { PhotoService } from '../../services/photo.service';
import { LocationService } from '../../services/location.service';

//MODELS
import { Photo } from '../../models/Photo.model'
import { Location } from '../../models/Location.model'


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
  providers : [PhotoService, LocationService]
})
export class PhotoListComponent implements OnInit {
  private _location :String;
  private listPhotos: Array<Photo>;
  private error: String;

  constructor(private photoService : PhotoService ,
              public locationService : LocationService,
              public route : ActivatedRoute) {
                this.route.params.subscribe(params => {
                this._location = params.id;
              }
            );
      }

  ngOnInit() {
    this.photoService.getByLocation(this._location).subscribe(
      (items)=> {this.listPhotos=items},
      (err)=> {this.error=err.message}
);

  }

}
