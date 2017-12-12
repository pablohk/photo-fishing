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

  private ListLocation : Array<Location>;
  private ListPhotos : Array<Photo>;
  private ListUser: Array<User>;
  error : String;
  location : Location;;
  private userP: User;

  constructor(  private route: ActivatedRoute,
               private locationService : LocationService,
                private photoService :PhotoService,
                private userService : UserService) {

       this.locationService.getAll().subscribe(
         (items)=> {this.ListLocation=items},
         (err)=> {this.error=err.message});

         this.userService.getAll().subscribe(
           (items)=> {
            this.ListUser=items},
           (err)=> {this.error=err.message});


    }
    ngOnInit() {}

    selectLocation(id: String): void {
        //this.ListPhotos=null;
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
      //this.ListPhotos=null;
      console.log("---- ENTRO EN selectUser de photo.component");
      console.log(id);
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
