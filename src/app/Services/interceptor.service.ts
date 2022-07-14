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
    this.language.getLanguage().subscribe((res) => (this.lang = res));
    req = req.clone({
      setParams: {
        language: this.lang,
        apiKey: 'ae57e2c718a444629059fa1fc20114a6',
      },
    });

    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
      })
    );
  }
}
