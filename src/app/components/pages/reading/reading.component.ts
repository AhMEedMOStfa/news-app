import { News } from './../../../interface/news';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  MarkItemReadingList,
  removeFromReadingList,
} from 'src/app/store/reading-list.action';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
})
export class ReadingComponent implements OnInit {
  readingList: News[] = [];
  constructor(private store: Store<{ readingList: News[] }>) {
    store.select('readingList').subscribe((res) => {
      this.readingList = res;
    });
  }

  markAsRead(index: number) {
    this.store.dispatch(MarkItemReadingList({ index }));
  }

  removeFromList(index: number) {
    this.store.dispatch(removeFromReadingList({ index }));
  }
  ngOnInit(): void {}
}
