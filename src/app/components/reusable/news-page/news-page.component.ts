import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interface/news';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  worldNews:News[]=[];
  newsCategory: string = '';
  newsCountry: string = '';
  imgLoad='../../../../assets/images/load.jpg';
  constructor(private _activateRouter:ActivatedRoute , private apiNews:ApiPoliticsService ) { }

  ngOnInit(): void {
    this.newsCategory = this._activateRouter.snapshot.routeConfig?.path!;
    this.newsCountry = this._activateRouter.snapshot.routeConfig?.path!;
    this.apiNews.getWorldData(this.newsCategory).subscribe((world)=> {
      this.worldNews = world.articles;
      console.log(this.worldNews)
    }) 

  
    
  }
}
