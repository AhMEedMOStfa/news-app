import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  constructor(
    public loaderService: LoaderService,
  ) {}

  ngOnInit(): void {

  }
}
