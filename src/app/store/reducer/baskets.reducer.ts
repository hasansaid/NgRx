import { addBasket } from './../acitons/basket.action';
import { createReducer, createAction, on, props } from '@ngrx/store';
import { IBasket } from 'src/app/models/basket.model';
import * as BasketAction from '../acitons/basket.action';

export const initialState: IBasket[] = [];

export const BasketsReducer = createReducer(
  initialState,
  on(BasketAction.addBasket, (state, { basket }) => {
    return [...state, basket];
  })
);
