import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interface/news';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
})
export class WorldComponent implements OnInit {
  constructor() {
   }
  ngOnInit(): void {
  }
}
