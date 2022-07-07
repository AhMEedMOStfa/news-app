import { Component, OnInit , HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarMove:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll',['$event'])
  onScroll()
  {
    if(window.scrollY) this.navbarMove=true;
    else this.navbarMove=false;
  }

}
