import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interface/news';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css'],
})
export class PoliticsComponent implements OnInit {
  politicsNews: News[] = [];
  newsCategory: string = '';
  constructor(
    private activateRoute: ActivatedRoute,
    private apiPolitics: ApiPoliticsService
  ) {}

  ngOnInit(): void {
    this.newsCategory = this.activateRoute.snapshot.routeConfig?.path!;
    console.log(this.newsCategory);
    this.apiPolitics.getData(this.newsCategory).subscribe((manchet) => {
      this.politicsNews = manchet.articles;
    });
  }
}
