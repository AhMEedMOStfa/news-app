import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  email:any;

  constructor(public _userEmail:LocalStorageService) { 

  }

  ngOnInit(): void {
    this._userEmail.getEmail().subscribe(
      (res:any)=>
      {
        this.email = res
        console.log(this.email)
        
      }
    )


  }

}
