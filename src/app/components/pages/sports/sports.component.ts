import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interface/news';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  usaNews: News[] = [];
  franceNews: News[] = [];
  tempfr: News[] = [];
  tempUsa: News[] = [];
  sportsNews: News[] = [];
  newsCategory: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private apiNews: ApiPoliticsService
  ) {}

  ngOnInit(): void {
    this.newsCategory = this.activeRouter.snapshot.routeConfig?.path;
    console.log(this.newsCategory);
    this.apiNews.getData(this.newsCategory , 'fr').subscribe((france) => {
      this.franceNews =france.articles;
      this.franceNews = this.apiNews.filterManchet(this.franceNews,6);
      this.tempfr=[...this.franceNews];
      france.articles=[];
      });
      this.apiNews.getData(this.newsCategory , 'us').subscribe((usa) => {
        this.usaNews =usa.articles;
    });
    
  }
}
