import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiNewsService {
  constructor(private http: HttpClient) {}

  getData(category: string, country: string): Observable<any> {
    return this.http.get<any>(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}`
    );
  }
  getWorldData(category: string): Observable<any> {
    return this.http.get<any>(
      `https://newsapi.org/v2/everything?q=${category}&from=2022-07-02&to=2022-07-06&sortBy=popularity`
    );
  }
  getSearchedTopic(topic: string): Observable<any> {
    return this.http.get<any>(
      `https://newsapi.org/v2/everything?q=${topic}&from=2022-07-12&sortBy=popularity`
    );
  }
}
