import { countIncrement } from './../acitons/counter.action';
// where states are ruled (durumların yönetildiği yer)

import { createReducer, on } from '@ngrx/store';

export const initialCount = 0;

export const CounterReducer = createReducer(
  initialCount,
  on(countIncrement, (state) => state + 1)
);
