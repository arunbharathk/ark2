import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgcarouselComponent } from './ngcarousel/ngcarousel.component';
import { Homepagesection2Component } from './homeCircleImageGrid/homepagesection2.component';
import { HomepagegridComponent } from './homepagegrid/homepagegrid.component';
import { HomepageSubscribeComponent } from './homepage-subscribe/homepage-subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';

import { BsModalService } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    NgcarouselComponent,
    Homepagesection2Component,
    HomepagegridComponent,
    HomepageSubscribeComponent,
    FooterComponent,
    SignupComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
