import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup=this.fb.group({
    registerName:["",[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]], 
    registerLastName:["",[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
    registerEmail:["",[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    registerUserName:["",[Validators.required,Validators.pattern(/^\w[a-zA-Z@#0-9.]*$/)]],
    registerPassword :["",[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
    registerConfirmPassword :["",[Validators.required,]],
  })

  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {
  }
  submitRegister(){
    console.log(this.registerForm)
  }
  get controlValidation(){
    return this.registerForm.controls
  }

}
