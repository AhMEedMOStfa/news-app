import { News } from '../interface/news';
import { createAction, props } from '@ngrx/store';

export const AddtoReadingList = createAction(
  '[Reading] AddtoReadingList',
  props<News>()
);
