import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

//SERVICES
import {LocationService } from '../../services/location.service';
import {PhotoService } from '../../services/photo.service';
import {UserService } from '../../services/user.service';

//MODELS
import { Location } from '../../models/Location.model';
import { Photo } from '../../models/Photo.model';
import { User } from '../../models/User.model';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [LocationService, PhotoService, UserService]
})
export class PhotoComponent implements OnInit {

  public ListLocation : Array<Location>;
  public ListPhotos : Array<Photo>;
  public ListUser: Array<User>;
  public error : String;
  public location : Location;;
  public userP: User;

  constructor(  public route: ActivatedRoute,
                public locationService : LocationService,
                public photoService :PhotoService,
                public userService : UserService) {

       this.locationService.getMyLocation().subscribe(
         (items)=> {this.ListLocation=items},
         (err)=> {this.error=err.message});

         this.userService.getAll().subscribe(
           (items)=> {
            this.ListUser=items},
           (err)=> {this.error=err.message});


    }
    ngOnInit() {}

    selectLocation(id: String): void {
        this.locationService.getById(id).subscribe(
          (item)=>{
              this.location=item;
              console.log(item)
              this.photoService.getByLocation(item._id).subscribe(
                (items)=>{this.ListPhotos= items;},
                (err)=>{this.error =err;}
              );
            },
          (err)=> {this.error=err}
        );
      }

    selectUser(id: String): void {
      this.userService.getById(id).subscribe(
        (item)=>{
            this.userP=item;
            this.photoService.getByUser(item._id).subscribe(
              (items)=>{
                console.log(items);
                this.ListPhotos= items;},
              (err)=>{this.error = err;}
            );
          },
        (err)=> {this.error=err}
      );
    }



}
