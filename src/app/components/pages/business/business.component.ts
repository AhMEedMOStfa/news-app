import { Component, OnInit } from '@angular/core';
import { ApiPoliticsService } from 'src/app/Services/api-news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business: any;
  newsCategory:string|undefined;

  constructor(private activeRouter:ActivatedRoute , private apiNews:ApiPoliticsService) { }

  ngOnInit(): void {
    this.newsCategory=this.activeRouter.snapshot.routeConfig?.path;
    this.apiNews.getData(this.newsCategory).subscribe((manchet)=> {
      this.business= manchet.articles
    })
  }

}
