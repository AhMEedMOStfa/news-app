import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../news';
import { ApiNewsService } from '../../../Services/api-news.service';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  topic: any = '';
  searchedNews: News[] = [];
  imgLoad:string='../../../../assets/images/search.jpg';
  constructor(
    private _activateRouter: ActivatedRoute,
    private apiNewsService: ApiNewsService,
    public loaderService:LoaderService
  ) {}

  ngOnInit(): void {
    this.topic = this._activateRouter.snapshot.paramMap.get('topic');
    this.apiNewsService.getSearchedTopic(this.topic).subscribe((res) => {
      this.searchedNews = res.articles;
    });
  }
}
