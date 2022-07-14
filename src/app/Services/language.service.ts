import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  language = new BehaviorSubject('');
  setLanguage(lang:string)
  {
   this.language.next(lang);
  }
  getLanguage()
  {
    return this.language.asObservable();
  }
}
