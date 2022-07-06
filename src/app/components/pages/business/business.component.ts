import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {


  constructor(
    public loaderService: LoaderService,
  ) {}

  ngOnInit(): void {


  }
}
