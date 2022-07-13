import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private _router: Router , private toaster:ToastrService
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('auth')) {
      return true;
    } else {
      this.toaster.error("please login first" , "Alert" , {easing : 'ease-in' , easeTime:500 ,})
      setTimeout(()=> {
        this._router.navigate(['auth/login'])
      }, 1000)
     ;
      return false;
    }
  }
  
}
