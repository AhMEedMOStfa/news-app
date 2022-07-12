import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../news';
import { ApiNewsService } from '../../../Services/api-news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  topic: any = '';
  searchedNews: News[] = [];
  constructor(
    private _activateRouter: ActivatedRoute,
    private apiNewsService: ApiNewsService
  ) {}

  ngOnInit(): void {
    this.topic = this._activateRouter.snapshot.paramMap.get('topic');
    this.apiNewsService.getSearchedTopic(this.topic).subscribe((res) => {
      this.searchedNews = res.articles;
    });

    console.log('searched', this.searchedNews);
  }
}
