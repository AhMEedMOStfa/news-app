import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interface/news';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  worldNews:Array<News>=[];

  constructor(private apiNews:ApiPoliticsService) {
   }
  

  ngOnInit(): void {
    this.apiNews.getWorldData().subscribe((worldData)=>{
      this.worldNews=worldData.articles
      console.log(worldData);
      console.log(this.worldNews)
    })

  }


}
