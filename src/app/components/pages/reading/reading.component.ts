import { News } from './../../../interface/news';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromReadingList } from 'src/app/store/reading-list.action';

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
    console.log("readingList...",this.readingList)
  }
  removeFromList(index: number) {
    this.store.dispatch(removeFromReadingList({ index }));
    console.log(this.readingList, this.readingList.length);
  }
  ngOnInit(): void {
    console.log(this.readingList);
  }
}
