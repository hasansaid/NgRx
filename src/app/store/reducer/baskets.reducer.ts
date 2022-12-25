import { createReducer, createAction, on } from '@ngrx/store';

export const BasketsReducer = createReducer(
  0,
  on(createAction('[Baskets] Add Count'), (state) => state + 1)
);
