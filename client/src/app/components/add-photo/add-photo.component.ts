import { Component, OnInit  } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../../environments/environment';

// SERVICES
import { PhotoService } from '../../services/photo.service';
import { LocationService } from '../../services/location.service';
import { AuthService } from '../../services/auth.service';

//MODELS
import { Photo } from '../../models/Photo.model'
import { Location } from '../../models/Location.model'

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
    providers: [PhotoService, LocationService]
})
export class AddPhotoComponent implements OnInit {

  private error: String;
  private  uploader: FileUploader;

  newPhoto ={
    title: '',
    description: '',
    priv: true,
    _location:''
  }

  constructor( private photoService : PhotoService ,
              public locationService : LocationService,
              public route : ActivatedRoute) {

        this.route.params.subscribe(params => {
          this.newPhoto._location = params.id;});

        this.uploader=new FileUploader({
          url: `${environment.apiUrl}/api/photo/${this.newPhoto._location}`});
  }

  ngOnInit() { }

  submit() {
    this.addToFolder();
    console.log("----------submit method");
    console.log(this.newPhoto);
}


private addToFolder():void {
   this.uploader.onBuildItemForm = (item, form) => {
    form.append('title', this.newPhoto.title);
    form.append('description', this.newPhoto.description);
    form.append('priv', this.newPhoto.priv);
  };
  this.uploader.uploadAll();
}

}
