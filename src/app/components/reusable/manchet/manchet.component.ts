import { ReadingListService } from './../../../Services/reading-list.service';
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
  imgLoad = '../../../../assets/images/load (2).png';
  constructor(
    private store: Store<{ readingList: News[] }>,
    private readingListService: ReadingListService
  ) {
    store.select('readingList').subscribe((res) => {
      this.readingList = res;
    });
  }

  ngOnInit(): void {
    this.manchetData.inReadingList = this.readingListService.found(
      this.readingList,
      this.manchetData.title
    );
    this.manchetData.readed = this.readingListService.readed(
      this.readingList,
      this.manchetData.title
    );
  }

  addToBook(e: Event) {
    e.stopPropagation();
    this.store.dispatch(AddtoReadingList(this.manchetData));
    this.manchetData.inReadingList = this.readingListService.found(
      this.readingList,
      this.manchetData.title
    );
  }
}
