import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  error: String;

  constructor(private route: ActivatedRoute) {

      this.route.params.subscribe(params => {
      this.error = params['error'];})

      this.route.queryParams.subscribe(params => {
      this.error = params['error'];})
  }

  ngOnInit() {}

}
