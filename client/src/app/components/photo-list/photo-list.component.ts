import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

// SERVICES
import { AuthService } from '../../services/auth.service';
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
  public _location :String;

  @Input() public listPhotos: Array<Photo> ;

  public baseUrl = `${environment.apiUrl}/`;
  public error: String;

constructor(public authService : AuthService,
            public photoService : PhotoService ,
            public locationService : LocationService,
            public route : ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.error = params['error'];
    this._location = params['id']})

    this.photoService.getByLocation(this._location).subscribe(
      (items)=> {
        this.listPhotos=items;
    },
      (err)=> {this.error=err.message}
);

  }

}
