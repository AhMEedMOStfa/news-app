import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  users:[{}]=[{}];
  

  constructor() {}

  setLocalStorage(email:string , password:string) 
  {
    this.users = JSON.parse(localStorage.getItem("users")!) || [] 
     this.users.push({email , password })
     localStorage.setItem("users" , JSON.stringify(this.users))
     
  }
  
  getLocalStorage(email:string , password:string)
  {
    this.users = JSON.parse(localStorage.getItem("users")!) || [] 
   let user = this.users.find((user:any)=> {

     return user.email == email && user.password == password 
    })

    if(user)
    {
      
      return email
      
    }
    else 
    {
      return false
    }
  }
}
