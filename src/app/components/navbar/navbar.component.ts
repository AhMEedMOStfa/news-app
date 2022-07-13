import { ApiNewsService } from 'src/app/Services/api-news.service';
import { Router } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarMove: boolean = false;
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY) this.navbarMove = true;
    else this.navbarMove = false;
  }

  search(topic: string) {
    this._router
      .navigate([`/search`], { skipLocationChange: true })
      .then(() => {
        this._router.navigate([`/search/${topic}`]);
      });
  }
}
