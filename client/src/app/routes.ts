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


// SERVICES
import { IsLoggedInService } from './services/isLoggedIn.canActivate.service';

const routes : Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  //{ path: 'home', component: HomeComponent, canActivate: [ IsLoggedInService ] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'location', component: LocationComponent  },
  { path: 'location/add', component: AddLocationComponent  },
  { path: 'photo/list/:id', component: PhotoListComponent  },
  { path: 'photo/add/:id', component: AddPhotoComponent },
  { path: 'photo', component: PhotoComponent  },
  { path: 'weather', component: WeatherTodayComponent  },
  { path: 'weather/forecast', component: WeatherForecastComponent },
  { path: '**', redirectTo: 'weather' }
];
export { routes }
