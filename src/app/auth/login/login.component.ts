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
  notCorrect: boolean = false;
  state: string = '';

  constructor(
    private _fb: FormBuilder,
    private _localstorageService: LocalStorageService,
    private _router: Router
  ) {}

  loginForm: FormGroup = this._fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      ],
    ],
    password: ['', [Validators.required]],
  });

  submitForm() {
    if (this.loginForm.valid) {
      let correct = this._localstorageService.getLocalStorage(
        this.loginForm.value.email,
        this.loginForm.value.password
      );

      if (correct) {
        this._router.navigate(['/home']);
      } else {
        this.notCorrect = true;
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
