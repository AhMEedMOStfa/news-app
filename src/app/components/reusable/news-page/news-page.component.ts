import { ApiNewsService } from './../../../Services/api-news.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/components/pages/news';
import { SwUpdate } from '@angular/service-worker';
import { PwaService } from 'src/app/Services/pwa.service';
import { LoaderService } from 'src/app/Services/loader.service';
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
  worldDestroy: any;
  pwaDestroy: any;
  imgLoad = '../../../../assets/images/load.jpg';
  pageLength: number = 0;
  page: number = 1;
  constructor(
    private _activateRouter: ActivatedRoute,
    private apiNews: ApiNewsService,
    updates: SwUpdate,
    private pwa: PwaService,
    public loaderService: LoaderService
  ) {
    updates.available.subscribe((event) => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(): void {
    this.newsCategory = this._activateRouter.snapshot.routeConfig?.path!;
    this.worldDestroy = this.apiNews
      .getWorldData(this.newsCategory)
      .subscribe((world) => {
        this.worldNews = world.articles;

        this.pageLength = world.articles.length;
      });
    this.pwaDestroy = this.pwa
      .getNewsPwa(this.newsCategory)
      .subscribe((news) => {
        this.news = news;
      });
  }

  ngOnDestroy(): void {
    this.worldDestroy.unsubscribe();
    this.pwaDestroy.unsubscribe();
  }
}
