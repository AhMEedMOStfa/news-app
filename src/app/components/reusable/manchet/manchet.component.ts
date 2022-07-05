import { News } from './../../../interface/news';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddtoReadingList, removeFromReadingList } from 'src/app/store/reading-list.action';
import { ParseFlags } from '@angular/compiler';

@Component({
  selector: 'app-manchet',
  templateUrl: './manchet.component.html',
  styleUrls: ['./manchet.component.css'],
})
export class ManchetComponent implements OnInit {
  @Input() manchetData: News = {} as News;

  inInBook: boolean = false;

  
  constructor(private store: Store<{ readingList: News[] }>) {
  }
  
  ngOnInit(): void {}

  addToBook(e: any) {
    e.stopPropagation();
    if (!this.inInBook) {
      this.store.dispatch(AddtoReadingList(this.manchetData));
      this.inInBook = true;
    } else {
      this.store.dispatch(removeFromReadingList(this.manchetData));
      this.inInBook = false;
    }
    console.log(this.inInBook)
  }
}
