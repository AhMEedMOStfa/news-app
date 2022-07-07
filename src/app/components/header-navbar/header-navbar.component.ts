import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css'],
})
export class HeaderNavbarComponent implements OnInit {
  email: string = '';
  isLogin: boolean = false;

  constructor(public _userEmail: LocalStorageService) {}

  ngOnInit(): void {
    this._userEmail.getEmail().subscribe((res: string) => {
      this.email = res;
    });

    if (!this.email) {
      this.email = this._userEmail.getState();
    }
  }
}
