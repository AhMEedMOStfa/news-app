import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  notLoggedIn: boolean = false;
  state: string = '';

  constructor(
    private regForm: FormBuilder,
    private _localstorageService: LocalStorageService,
    private router: Router
  ) {}

  loginForm: FormGroup = this.regForm.group({
    email: [
      null,
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      ],
    ],
    password: [null, [Validators.required]],
  });

  submitForm() {
    if (this.loginForm.valid) {
      let userName = this._localstorageService.getLocalStorage(
        this.loginForm.value.email,
        this.loginForm.value.password
      );

      if (userName) {
        console.log(userName);
        this.router.navigate(['/home']);
      } else {
        this.notLoggedIn = true;
      }
    }
  }

  checkAuth() {
      return localStorage.setItem('auth', 'true');
  }

  onChange(e: any) {
    if (e.target.checked) {
      this._localstorageService.saveState(this.loginForm.value.email);
    }
  }

  ngOnInit(): void {}
}
