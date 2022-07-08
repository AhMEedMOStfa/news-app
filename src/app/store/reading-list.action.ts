import { News } from '../interface/news';
import { createAction, props } from '@ngrx/store';

export const AddtoReadingList = createAction(
  '[Reading] AddtoReadingList',
  props<News>()
);
export const removeFromReadingList = createAction(
  '[Reading] removeFromReadingList',
  props<{ index: number }>()
);

export const MarkItemReadingList = createAction(
  '[Reading] MarkItemReadingList',
  props<{ index: number }>()
);
