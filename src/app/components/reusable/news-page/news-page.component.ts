import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interface/news';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';
import { SwUpdate } from '@angular/service-worker';
import { PwaService } from 'src/app/Services/pwa.service';
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
})
export class NewsPageComponent implements OnInit {
  worldNews: News[] = [];
  news: News[] = [];
  newsCategory: string = '';
  newsCountry: string = '';
  imgLoad = '../../../../assets/images/load.jpg';
  pageLength:number=0;
  page:number=1;
  constructor(
    private _activateRouter: ActivatedRoute,
    private apiNews: ApiPoliticsService,
    updates:SwUpdate , private pwa:PwaService
  ) {
    updates.available.subscribe(event=>{
      // this.update=true;
      updates.activateUpdate().then(()=>document.location.reload());
    })
  }

  ngOnInit(): void {
    this.newsCategory = this._activateRouter.snapshot.routeConfig?.path!;
    this.newsCountry = this._activateRouter.snapshot.routeConfig?.path!;
    this.apiNews.getWorldData(this.newsCategory).subscribe((world) => {
      this.worldNews = world.articles;
      console.log(world);
      
      this.pageLength = world.articles.length;
    });
    this.pwa.getNewsPwa(this.newsCategory).subscribe((news)=>{
      this.news=news;
    })
  }
}
