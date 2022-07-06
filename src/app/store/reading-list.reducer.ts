import { removeFromReadingList } from 'src/app/store/reading-list.action';
import { News } from './../interface/news';
import { createReducer, on } from '@ngrx/store';
import { AddtoReadingList } from './reading-list.action';

export const initialState: News[] = [];

export const readingListReducer = createReducer(
  initialState,
  on(AddtoReadingList, (state, news: News) => {
    let arr = [...state];
    let found = false;
    state.forEach((e, i) => {
      if (e.title === news.title) {
        arr.splice(i, 1);
        found = true;
      }
    });
    
    if (found) {
      return arr;
    } else {
      state = [...state, news];
      return state;
    }
  }),
  on(removeFromReadingList, (state, { index }) => {
    state = [...state];
    state.splice(index, 1);
    return state;
  })
);
