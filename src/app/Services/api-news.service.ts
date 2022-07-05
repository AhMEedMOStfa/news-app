import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../interface/news';
@Injectable({
  providedIn: 'root',
})
export class ApiPoliticsService {
  constructor(private http: HttpClient) {}
  getData(category: string): Observable<any> {
    return this.http.get<any>(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3e78728f97924b109e483ec14ecb2d05`
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
