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

  readingList: News[] = [];

  constructor(private store: Store<{ readingList: News[] }>) {
    store.select('readingList').subscribe((res) => {
      this.readingList = res;
    });

    if (!this.manchetData.urlToImage) {
      this.manchetData.urlToImage =
        'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640';
    }
  }

  ngOnInit(): void {
    let found = this.readingList.findIndex((e) => {
      return e.title == this.manchetData.title;
    });

    if (found != -1) {
      this.manchetData.inReadingList = true;
    } else {
      this.manchetData.inReadingList = false;
    }
  }

  addToBook(e: any) {
    e.stopPropagation();
    this.store.dispatch(AddtoReadingList(this.manchetData));
    let found = this.readingList.findIndex((e) => {
      return e.title == this.manchetData.title;
    });

    if (found != -1) {
      this.manchetData.inReadingList = true;
    } else {
      this.manchetData.inReadingList = false;
    }
  }
}
