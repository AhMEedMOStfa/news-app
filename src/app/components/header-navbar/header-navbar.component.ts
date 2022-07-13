import { Component, OnInit } from '@angular/core';
import { InterceptorService } from 'src/app/Services/interceptor.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css'],
})
export class HeaderNavbarComponent implements OnInit {
  email: string = '';
  isLogin: boolean = false;
  

  constructor(public _userEmail: LocalStorageService,private language:InterceptorService) {}

  ngOnInit(): void {
    this._userEmail.getEmail().subscribe((res: string) => {
      this.email = res;
    });

    if (!this.email) {
      this.email = this._userEmail.getState();
    }
  }

  logout() {
    this.email = '';
    this._userEmail.deleteState();
  }
  putFrenchLang()
  {
    this.language.lang ='fr';
  }
  putEnglishLang()
  {
    this.language.lang ='en'; 
  }
}
