import { Routes } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { IsLoggedInService } from './services/isLoggedIn.canActivate.service';


const routes : Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  //{ path: 'home', component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [ IsLoggedInService ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'location', component: LocationComponent },
  { path: '**', redirectTo: 'login' }
];

export { routes }
