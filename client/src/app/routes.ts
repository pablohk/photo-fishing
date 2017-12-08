import { Routes } from "@angular/router";

//COMPONENTS
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';


// SERVICES
import { IsLoggedInService } from './services/isLoggedIn.canActivate.service';

const routes : Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  //{ path: 'home', component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [ IsLoggedInService ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'location', component: LocationComponent },
  { path: 'photo/list', component: PhotoListComponent },
  { path: 'photo/add/:id', component: AddPhotoComponent },
  { path: 'photo', component: PhotoComponent },
  { path: '**', redirectTo: 'login' }
];
export { routes }
