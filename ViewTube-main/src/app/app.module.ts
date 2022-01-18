import { NgModule, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule} from 'ngx-useful-swiper';
//import { SwiperModule } from 'swiper/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent,
    LandingComponent,
    HeaderComponent,
    SplashScreenComponent,
    // SwiperComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxUsefulSwiperModule,
    // SwiperModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
