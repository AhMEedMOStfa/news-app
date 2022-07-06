import { ReadingComponent } from './components/pages/reading/reading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/pages/business/business.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PoliticsComponent } from './components/pages/politics/politics.component';
import { SportsComponent } from './components/pages/sports/sports.component';
import { TechnologyComponent } from './components/pages/technology/technology.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { WorldComponent } from './components/pages/world/world.component';
import { CountryNewsComponent } from './components/pages/country-news/country-news.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'politics', component: PoliticsComponent, canActivate: [AuthenticationGuard],
  },
  { path: 'sports', component: SportsComponent, canActivate: [AuthenticationGuard] },
  { path: 'technology', component: TechnologyComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'world', component: WorldComponent },
  {path:'home/:category/:country',component:CountryNewsComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  { path: 'reading', component: ReadingComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
