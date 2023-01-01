import { Stores } from './../store/store';
import { Store } from '@ngrx/store';
import { IBasket } from 'src/app/models/basket.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as BasketActions from '../store/acitons/basket.action';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  apiUrl = 'http://localhost:3000/baskets';
  baskets: IBasket[] = [];
  constructor(
    private httpClient: HttpClient,
    private store: Store<Stores['baskets']>
  ) {}

  post(model: IBasket) {
    this.httpClient.post<any>(this.apiUrl, model).subscribe((data) => {
      this.store.dispatch(BasketActions.addBasket({ basket: model }));
    });
  }

  getAllBaskets(callBack: () => void) {
    this.httpClient.get<IBasket[]>(this.apiUrl).subscribe((data) => {
      this.baskets = data;
      callBack();
    });
  }
}
