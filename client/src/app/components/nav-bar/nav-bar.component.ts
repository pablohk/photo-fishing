import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// SERVICES
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService : AuthService,
              private router : Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout().subscribe(
      ()=>{ this.router.navigate(['/login']);}
    );
  }
}
