import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interface/news';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  usaNews: News[] = [];
  franceNews: News[] = [];
  tempfr: News[] = [];
  pageNews: News[] = [];
  newsCategory: string = '';

  constructor(private _activateRouter:ActivatedRoute , private apiNews:ApiPoliticsService ) { }

  ngOnInit(): void {

    this.newsCategory = this._activateRouter.snapshot.routeConfig?.path!;
    this.apiNews.getData(this.newsCategory ,"fr").subscribe((france)=> {
      this.franceNews = france.articles 
    }) 
    this.apiNews.getData(this.newsCategory , "us").subscribe((usa)=> {
      this.usaNews = usa.articles
    })  
  }

}
