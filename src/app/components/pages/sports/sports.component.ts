import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsNews:any;
  newsCategory:any;
  constructor(private activeRouter:ActivatedRoute ,private apiNews:ApiPoliticsService ) { }

  ngOnInit(): void {
    this.newsCategory = this.activeRouter.snapshot.routeConfig?.path;
    this.apiNews.getData(this.newsCategory).subscribe((manchet)=>{
      this.sportsNews=manchet.articles;
    })
  }

}
