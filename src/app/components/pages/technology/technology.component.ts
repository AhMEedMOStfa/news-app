import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {

  constructor(

    public loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    
  }
}
