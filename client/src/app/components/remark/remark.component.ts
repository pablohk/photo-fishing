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
  private remark: Remark;
  private listRemark: Array<Remark>;
  error : String;

  constructor( public route : ActivatedRoute,
              private remarkService : RemarkService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.error = params['error'];})

    this.route.queryParams.subscribe(params => {
    this.error = params['error'];})

    this.remarkService.getMyRemark().subscribe(
      (items)=>{this.listRemark = items;
        console.log(this.listRemark)
      },
      (err)=>{this.error=err}
    );
  }

  getAll(){

  }
}
