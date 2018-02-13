import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

// MODELS
import { Remark } from '../../models/Remark.model';

//SERVICES
import { RemarkService } from '../../services/remark.service';

@Component({
  selector: 'app-remark',
  templateUrl: './remark.component.html',
  styleUrls: ['./remark.component.css'],
  providers: [RemarkService]
})
export class RemarkComponent implements OnInit {
  public remark: Remark;
  public listRemark: Array<Remark>;
  public error : String;

  constructor( public route : ActivatedRoute,
               public remarkService : RemarkService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.error = params['error'];})

    this.route.queryParams.subscribe(params => {
    this.error = params['error'];})

    this.remarkService.getMyRemark().subscribe(
      (items)=>{this.listRemark = items;},
      (err)=>{this.error=err}
    );
  }

}
