import { Component, OnInit , OnDestroy } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '../../../environments/environment';

// SERVICES
import { PhotoService } from '../../services/photo.service';
import { LocationService } from '../../services/location.service';

//MODELS
import { Photo } from '../../models/Photo.model'
import { Location } from '../../models/Location.model'

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
    providers: [PhotoService, LocationService]
})
export class AddPhotoComponent implements OnInit , OnDestroy{
  private sub: any;
  private location_id: String;
  private error: String;
  private  uploader: FileUploader = new FileUploader({
     url: `${environment.apiUrl}/api/photo/5a2719c3dbd8833ef6f6179b`
   });
  photo : Photo;

  newPhoto ={
    title: '',
    description: '',
    priv: true
  }

  constructor(private photoService : PhotoService ,
              public locationService : LocationService,
              public route : ActivatedRoute) {
      this.sub = this.route.params.subscribe(params => {
        this.location_id = params['id'];
        console.log("----------en route paramas");
        console.log(params['id']);
      }
    );
  }

  ngOnInit() { }

   ngOnDestroy() {
      //this.sub.unsubscribe();
    }

  submit() {
    this.addToFolder();
    //'5a2719c3dbd8833ef6f6179b'
    console.log("----------");
    console.log(this.location_id);
    this.photoService.add(this.location_id,this.newPhoto).subscribe(
      (item)=> {this.photo=item},
      (err)=> {this.error=err}
    );
}

private change(){
  this.newPhoto.priv=!this.newPhoto;
}

private addToFolder():void {
   this.uploader.onBuildItemForm = (item, form) => {
    form.append('title', this.newPhoto.title);
    form.append('description', this.newPhoto.description);
  };
  this.uploader.uploadAll();
}

}
