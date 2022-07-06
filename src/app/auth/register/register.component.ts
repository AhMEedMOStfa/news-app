import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showErrors:boolean=false;
  registerForm:FormGroup=this.fb.group({
    registerName:["",[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]], 
    registerLastName:["",[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
    registerEmail:["",[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    registerUserName:["",[Validators.required,Validators.pattern(/^\w[a-zA-Z@#0-9.]*$/)]],
    registerPassword :["",[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
    registerConfirmPassword :["",[Validators.required]],
  },{validator:this.checkPasswords('registerPassword','registerConfirmPassword')});

  constructor(private fb:FormBuilder ,private _localstorageService: LocalStorageService ) { 
    
  }

  ngOnInit(): void {
  }
  
  submitRegister(data:object){
    this.showErrors=true;
    if(this.registerForm.valid) 
    {
      this._localstorageService.setLocalStorage(this.registerForm.value.registerEmail , this.registerForm.value.registerPassword)
    }

  }
  get controlValidation(){
    return this.registerForm.controls
  }

  checkPasswords(password:string , confirmPassword:string)
  {
    return (formgroup:FormGroup)=>
    {
      const pass = formgroup.controls[password];
      const confirmPass = formgroup.controls[confirmPassword];
      if(confirmPass.errors && !confirmPass.errors['checkPasswords'])
      {
        return;
      }
      if(pass.value !== confirmPass.value)
      {
        confirmPass.setErrors({['checkPasswords']: true});
      }
      else
      {
        confirmPass.setErrors(null);
      }
    }
  }


  

}
