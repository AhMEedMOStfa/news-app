import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../interface/news';
@Injectable({
  providedIn: 'root',
})
export class ApiPoliticsService {
  constructor(private http: HttpClient) {}
  getData(category: string , country:string): Observable<any> {
    return this.http.get<any>(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ae57e2c718a444629059fa1fc20114a6`
    );
  }
  getWorldData(): Observable<any> {
    return this.http.get<any>(
      `https://newsapi.org/v2/everything?q=apple&from=2022-07-04&to=2022-07-04&sortBy=popularity&apiKey=617ae74d111d494a8909056790c87399`
    );
  }

  filterData:News[]=[];
  filterManchet(apiData:News[],count:number)
  {
    for (let i = 0; i < count; i++) {
       this.filterData.push(apiData[i]);
    }
    return this.filterData;
  }
}
