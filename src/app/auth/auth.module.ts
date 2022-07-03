import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { ReactiveFormsModule,FormsModule} from '@angular/forms';



>>>>>>> yasser
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    FormsModule,
    ReactiveFormsModule,
>>>>>>> yasser
  ]
})
export class AuthModule { }
