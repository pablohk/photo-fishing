import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

// SERVICES
import { AuthService } from '../../services/auth.service';

// MODELS

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  error: String;
  
  constructor( private authService : AuthService,
               private router: Router,
               public route : ActivatedRoute) {

        this.route.params.subscribe(params => {
        this.error = params['error'];})

        this.route.queryParams.subscribe(params => {
        this.error = params['error'];})
    }

  ngOnInit() {}

}
