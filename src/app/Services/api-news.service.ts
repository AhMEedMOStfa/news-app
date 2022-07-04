import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../interface/news';
@Injectable({
  providedIn: 'root'
})
export class ApiPoliticsService {

  constructor(private http:HttpClient) {
  }
  getData(category:string|undefined):Observable<News>
  {
    return this.http.get<News>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ae57e2c718a444629059fa1fc20114a6`);
  }


}
