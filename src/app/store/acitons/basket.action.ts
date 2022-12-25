import { createAction, props } from '@ngrx/store';
import { IBasket } from 'src/app/models/basket.model';

export const AddBasket = createAction(
  '[Baskets] Add Count',
  props<{ basket: IBasket }>()
);
