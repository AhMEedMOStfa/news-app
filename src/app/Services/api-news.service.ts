import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Observable } from 'rxjs';
import { News } from '../interface/news';
@Injectable({
  providedIn: 'root',
})
export class ApiPoliticsService {
  constructor(private http: HttpClient) {}

  fristTime = true;

  getData(category: string, country: string): Observable<any> {
    return this.http.get<any>(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3e78728f97924b109e483ec14ecb2d05`
    );
  }
  getWorldData(category: string): Observable<any> {
    return this.http.get<any>(
      `https://newsapi.org/v2/everything?q=${category}&from=2022-07-04&to=2022-07-04&sortBy=popularity&apiKey=617ae74d111d494a8909056790c87399`
    );
  }
}
