import { Injectable } from '@angular/core';
import { News } from '../interface/news';

@Injectable({
  providedIn: 'root',
})
export class ReadingListService {
  constructor() {}

  found(readingList: News[], title: string) {
    let found = readingList.findIndex((e) => {
      return e.title == title;
    });

    if (found != -1) {
      return true;
    } else {
      return false;
    }
  }

  readed(readingList: News[], title: string) {
    let item = readingList.find((e) => {
      return e.title == title;
    });
    if (item) {
      return item.readed;
    } else {
      return false;
    }
  }
}
