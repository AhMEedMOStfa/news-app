import { LoaderService } from './loader.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    //'ae57e2c718a444629059fa1fc20114a6'
    req = req.clone({
      setParams: {
        language: 'en',
        apiKey: '5c18e00523004f30b085ac5f9986d6d1',
      },
    });
    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
      })
    );
  }
}