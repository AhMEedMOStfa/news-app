import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  constructor(private http:HttpClient) { }
  getNewsPwa(category:string):Observable<any>{
    return this.http.get<any>(
      `https://newsapi.org/v2/everything?q=${category}&from=2022-07-02&to=2022-07-06&sortBy=popularity`
    );
  }
}
