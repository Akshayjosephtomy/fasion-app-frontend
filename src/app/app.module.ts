import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddfasionComponent } from './addfasion/addfasion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewallfasionComponent } from './viewallfasion/viewallfasion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const link:Routes=[
  {
    path:"",component:AddfasionComponent
  },
  {
    path:"view",component:ViewallfasionComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddfasionComponent,
    NavbarComponent,
    ViewallfasionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
