import { News } from './../../../interface/news';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddtoReadingList } from 'src/app/store/reading-list.action';

@Component({
  selector: 'app-manchet',
  templateUrl: './manchet.component.html',
  styleUrls: ['./manchet.component.css'],
})
export class ManchetComponent implements OnInit {
  @Input() manchetData: News = {} as News;

  inInBook: boolean = false;

  constructor(private store: Store<{ readingList: News[] }>) {}

  ngOnInit(): void {}

  addToBook(e: any) {
    e.stopPropagation();
    this.store.dispatch(AddtoReadingList(this.manchetData));
    if (this.inInBook) {
      this.inInBook = false;
    } else {
      this.inInBook = true;
    }
  }
}
