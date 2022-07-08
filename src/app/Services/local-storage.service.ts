import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  users: [{}] = [{}];
  userEmail: string = '';

  constructor() {}

  emailSubject = new BehaviorSubject(this.userEmail);

  setLocalStorage(email: string, password: string) {
    this.users = JSON.parse(localStorage.getItem('users')!) || [];
    this.users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getLocalStorage(email: string, password: string) {
    this.users = JSON.parse(localStorage.getItem('users')!) || [];
    let user = this.users.find((user: any) => {
      return user.email == email && user.password == password;
    });

    if (user) {
      this.userEmail = email;
      this.setEmail();
      return email;
    } else {
      return false;
    }
  }

  saveState(email: string) {
    localStorage.setItem('saveLogin', JSON.stringify(email));
  }

  getState() {
    return JSON.parse(localStorage.getItem('saveLogin')!);
  }

  deleteState() {
    localStorage.setItem('saveLogin', JSON.stringify(''));
  }

  setEmail() {
    this.emailSubject.next(this.userEmail);
  }

  getEmail() {
    return this.emailSubject.asObservable();
  }
}
