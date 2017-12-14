import { Routes } from "@angular/router";

//COMPONENTS
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { RemarkComponent } from './components/remark/remark.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { KnotComponent } from './components/knot/knot.component';
import { AddRemarkComponent } from './components/add-remark/add-remark.component';

// SERVICES
import { IsLoggedInService } from './services/isLoggedIn.canActivate.service';

const routes : Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent , canActivate : [ IsLoggedInService ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'location', component: LocationComponent , canActivate : [ IsLoggedInService ]},
  { path: 'location/add', component: AddLocationComponent , canActivate : [ IsLoggedInService ] },
  { path: 'photo/list/:id', component: PhotoListComponent , canActivate : [ IsLoggedInService ] },
  { path: 'photo/add/:id', component: AddPhotoComponent },
  { path: 'photo', component: PhotoComponent , canActivate : [ IsLoggedInService ] },
  { path: 'weather', component: WeatherTodayComponent , canActivate : [ IsLoggedInService ]  },
  { path: 'weather/forecast', component: WeatherForecastComponent , canActivate : [ IsLoggedInService ]},
  { path: 'remark', component: RemarkComponent , canActivate : [ IsLoggedInService ]},
  { path: 'remark/add', component: AddRemarkComponent , canActivate : [ IsLoggedInService ]},
  { path: 'pruebas', component: PruebasComponent },
  { path: 'knot', component: KnotComponent , canActivate : [ IsLoggedInService ]},
  { path: 'errorPage', component: ErrorPageComponent },
  { path: '**', redirectTo: 'errorPage' }
];
export { routes }
