import { createReducer, createAction, on, props } from '@ngrx/store';
import { IBasket } from 'src/app/models/basket.model';

export const BasketsReducer = createReducer(
  [],
  on(
    createAction('[Baskets] Add Count', props<{ basket: IBasket }>()),
    (state, { basket }) => {
      return [...state, basket];
    }
  )
);
