import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css'],
})
export class PoliticsComponent implements OnInit {

  constructor(
    public loaderService: LoaderService,
  ) {}

  ngOnInit(): void {

 
}
}
