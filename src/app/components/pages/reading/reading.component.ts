import { News } from './../../../interface/news';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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

  ngOnInit(): void {
    console.log(this.readingList);
  }
}
