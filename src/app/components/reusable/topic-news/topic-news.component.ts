import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/components/pages/news';
import { ApiNewsService } from 'src/app/Services/api-news.service';

@Component({
  selector: 'app-topic-news',
  templateUrl: './topic-news.component.html',
  styleUrls: ['./topic-news.component.css'],
})
export class TopicNewsComponent implements OnInit {
  countryNews: News[] = [];
  country: any = '';
  category: any = '';
  constructor(
    private _activateRouter: ActivatedRoute,
    private apiNews: ApiNewsService
  ) {}

  ngOnInit(): void {
    this.country = this._activateRouter.snapshot.paramMap.get('country');
    this.category = this._activateRouter.snapshot.paramMap.get('category');
    this.apiNews.getData(this.category, this.country).subscribe((country) => {
      this.countryNews = country.articles;
    });
  }
}
