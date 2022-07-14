import { LoaderService } from './loader.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
    private language: LanguageService
  ) {}
  lang: string = '';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    //'ae57e2c718a444629059fa1fc20114a6'
    //7eb9e60fe9d04c68b8f74063c633b624
     this.language.getLanguage().subscribe((res)=> this.lang=res);
        req = req.clone({
      setParams: {
        language: this.lang,
        apiKey: '3e78728f97924b109e483ec14ecb2d05',
      },
    });

    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
      })
    );
  }
}
