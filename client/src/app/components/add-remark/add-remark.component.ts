import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';

//SERVICES
import { LocationService } from '../../services/location.service';
import { RemarkService } from '../../services/remark.service';

//MODELS
import { Location } from '../../models/Location.model';

@Component({
  selector: 'app-add-remark',
  templateUrl: './add-remark.component.html',
  styleUrls: ['./add-remark.component.css'],
  providers: [ LocationService , RemarkService]
})
export class AddRemarkComponent implements OnInit {

  public location : Location;
  public ListLocation : Array<Location>;
  public contain :String;
  public error :String;

  constructor(public locationService : LocationService,
              public remarkService: RemarkService,
              public router: Router) {

            this.locationService.getMyLocation().subscribe(
              (items)=> {this.ListLocation=items},
              (err)=> {this.error=err.message});
  }

  ngOnInit() { }

  selectLocation(id: String): void {
      this.locationService.getById(id).subscribe(
        (item)=>{this.location=item;},
        (err)=> {this.error=err}
      );
  }


    onSubmitRemark(remarkForm){
      this.remarkService.add(this.location._id, this.contain).subscribe(
        ()=>{
            remarkForm.reset();
            this.router.navigate(['remark']);
            },
        (err)=> {this.error=err;}
      );
    }
}
