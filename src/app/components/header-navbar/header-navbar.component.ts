import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterceptorService } from 'src/app/Services/interceptor.service';
import { LanguageService } from 'src/app/Services/language.service';
import { LoaderService } from 'src/app/Services/loader.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css'],
})
export class HeaderNavbarComponent implements OnInit {
  email: string = '';
  isLogin: boolean = false;
  urlCategory:any='';

  constructor(public _userEmail: LocalStorageService,private language:LanguageService ,private _router:Router) {
    
  }

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
  
     this.urlCategory=this._router.url;
     console.log(this.urlCategory);
     
    this.language.setLanguage('fr');
    this._router
    .navigate([`/dvsd`], { skipLocationChange: true })
    .then(() => {
      this._router.navigate([`${this.urlCategory}`]);
    });
  }
  putEnglishLang()
  {
    this.urlCategory=this._router.url;
    this.language.setLanguage('en');
    this._router
    .navigate([`/bdfb`], { skipLocationChange: true })
    .then(() => {
      this._router.navigate([`${this.urlCategory}`]);
    });
  }
}
