import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modules
import { AppRoutingModule } from './app-routing.module';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 
import {InputTextModule} from 'primeng/inputtext';
import {NgxPaginationModule} from 'ngx-pagination';
import {CarouselModule} from 'primeng/carousel';
import { ToastrModule } from 'ngx-toastr';
import {SkeletonModule} from 'primeng/skeleton';
import {RadioButtonModule} from 'primeng/radiobutton';

//components
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PoliticsComponent } from './components/pages/politics/politics.component';
import { SportsComponent } from './components/pages/sports/sports.component';
import { TechnologyComponent } from './components/pages/technology/technology.component';

import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ManchetComponent } from './components/reusable/manchet/manchet.component';
import { BusinessComponent } from './components/pages/business/business.component';
import { InterceptorService } from './Services/interceptor.service';
import { ReadingComponent } from './components/pages/reading/reading.component';
import { StoreModule } from '@ngrx/store';
import { readingListReducer } from './store/reading-list.reducer';
import { FooterComponent } from './components/footer/footer.component';
import { NewsPageComponent } from './components/reusable/news-page/news-page.component';
import { WorldComponent } from './components/pages/world/world.component';
import { CountryNewsComponent } from './components/pages/country-news/country-news.component';
import { TopicNewsComponent } from './components/reusable/topic-news/topic-news.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchComponent } from './components/pages/search/search.component';
import { SkeletonComponent } from './components/reusable/skeleton/skeleton.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    NavbarComponent,
    PoliticsComponent,
    SportsComponent,
    TechnologyComponent,

    HomeComponent,
    NotFoundComponent,
    ManchetComponent,
    BusinessComponent,
    ReadingComponent,
    FooterComponent,
    NewsPageComponent,
    WorldComponent,
    CountryNewsComponent,
    TopicNewsComponent,
    SearchComponent,
    SkeletonComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ readingList: readingListReducer }),
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    LazyLoadImageModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut : 2000 , 
      progressBar : true,
      progressAnimation : 'increasing' , 
      preventDuplicates : true ,
    }),
    CarouselModule,
    SkeletonModule,
    RadioButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production,registrationStrategy: 'registerWhenStable:30000'}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
