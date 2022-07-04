import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interface/news';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  techonolgy: News[] = [];
  newsCategory: string = '';

  constructor(
    private activeRouter: ActivatedRoute,
    private apiNews: ApiPoliticsService,
    public loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.newsCategory = this.activeRouter.snapshot.routeConfig?.path!;
    this.apiNews.getData(this.newsCategory).subscribe((manchet) => {
      this.techonolgy = manchet.articles;
      console.log(this.techonolgy);
    });
  }
}
