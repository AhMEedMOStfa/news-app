import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PoliticsComponent } from './components/pages/politics/politics.component';
import { SportsComponent } from './components/pages/sports/sports.component';
import { TechnologyComponent } from './components/pages/technology/technology.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
<<<<<<< HEAD
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
=======
import { ManchetComponent } from './components/reusable/manchet/manchet.component';
>>>>>>> ahmed

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    NavbarComponent,
    PoliticsComponent,
    SportsComponent,
    TechnologyComponent,
    ContactsComponent,
    HomeComponent,
    NotFoundComponent,
<<<<<<< HEAD

=======
    ManchetComponent
>>>>>>> ahmed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
=======
    HttpClientModule
>>>>>>> ahmed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
