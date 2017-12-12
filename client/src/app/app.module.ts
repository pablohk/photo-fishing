import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FileSelectDirective } from "ng2-file-upload";

// CUSTOM imports
import { routes } from './routes'
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';

// SERVICES
import { AuthService } from './services/auth.service';
import { IsLoggedInService } from './services/isLoggedIn.canActivate.service';
import { ChatService } from './services/chat.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { RemarkComponent } from './components/remark/remark.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { KnotComponent } from './components/knot/knot.component';
import { ChatComponent } from './components/chat/chat.component';
import { AddRemarkComponent } from './components/add-remark/add-remark.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LocationComponent,
    PhotoComponent,
    PhotoListComponent,
    FileSelectDirective,
    AddPhotoComponent,
    WeatherTodayComponent,
    WeatherForecastComponent,
    AddLocationComponent,
    PruebasComponent,
    RemarkComponent,
    NavBarComponent,
    ErrorPageComponent,
    KnotComponent,
    ChatComponent,
    AddRemarkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({apiKey:environment.apiKeyMaps})
  ],
  providers:[AuthService, IsLoggedInService ,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
