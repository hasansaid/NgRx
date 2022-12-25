import { Store } from '@ngrx/store';
import { IProduct } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.setProducts();
  }

  setProducts() {
    for (let i = 1; i < 101; i++) {
      let product = new IProduct();
      product.id = i;
      product.name = 'Product' + ' ' + i;
      product.unitPrice = i * 2;
      product.stock = i * 5;

      this.products.push(product);
    }
  }

  addBasket() {
    this.store.dispatch({ type: '[Baskets] Add Count' });
  }
}
