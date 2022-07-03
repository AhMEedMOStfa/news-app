import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PoliticsComponent } from './components/pages/politics/politics.component';
import { SportsComponent } from './components/pages/sports/sports.component';
import { TechnologyComponent } from './components/pages/technology/technology.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'politics',component:PoliticsComponent},
  {path:'sports',component:SportsComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},

  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
