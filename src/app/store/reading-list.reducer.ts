import { News } from '../components/pages/news';
import { createReducer, on } from '@ngrx/store';
import {
  AddtoReadingList,
  removeFromReadingList,
  MarkItemReadingList,
} from './reading-list.action';

export const initialState: News[] = [];

export const readingListReducer = createReducer(
  initialState,
  on(AddtoReadingList, (state, news: News) => {
    let readingList = [...state];
    let found = false;
    state.forEach((e, i) => {
      if (e.title === news.title) {
        readingList.splice(i, 1);
        found = true;
      }
    });

    if (found) {
      return readingList;
    } else {
      return [...state, news];
    }
  }),
  on(removeFromReadingList, (state, { index }) => {
    state = [...state];
    state.splice(index, 1);
    return state;
  }),
  on(MarkItemReadingList, (state, { index }) => {
    let readingList = [...state];
    return readingList.map((item, i) => {
      if (i == index) {
        return { ...item, readed: true };
      }
      return { ...item };
    });
  })
);
