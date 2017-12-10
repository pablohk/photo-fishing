import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

// MODELS
import { Remark } from '../../models/Remark.model';
import { User } from '../../models/User.model';

//SERVICES
import { RemarkService } from '../../services/remark.service';
import { AuthService } from '../../services/auth.service';

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
  user : User;
  constructor(private authService : AuthService,
              public route : ActivatedRoute,
              private remarkService : RemarkService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.error = params['error'];})

    this.route.queryParams.subscribe(params => {
    this.error = params['error'];})

    this.user = this.authService.getUser();
    this.authService.getLoginEventEmitter()
      .subscribe( user => this.user = user );

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
