import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
