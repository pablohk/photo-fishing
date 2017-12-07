import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// CUSTOM imports
import { routes } from './routes'
import { AgmCoreModule } from '@agm/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';

// SERVICES
import { AuthService } from './services/auth.service';
import { IsLoggedInService } from './services/isLoggedIn.canActivate.service';
//import { LocationService } from './services/location.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAaDOMBPrVAk6syCIRaDS_BAeTl9mi6QyE'})
  ],
  //providers: [AuthService, IsLoggedInService, LocationService],
  providers:[AuthService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
