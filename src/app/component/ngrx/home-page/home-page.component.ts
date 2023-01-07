import { BasketService } from './../../../services/basket.service';
import { ProductService } from './../../../services/product.service';
import { Stores } from './../../../store/store';
import { IBasket } from './../../../models/basket.model';
import { Store } from '@ngrx/store';
import { IProduct } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import * as BasketAction from '../../../store/acitons/basket.action';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  products: IProduct[] = [];
  constructor(
    // private store: Store<Stores['baskets']>,
    private productService: ProductService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService
      .getAllProduct()
      .subscribe((data) => (this.products = data));
  }
  // setProducts() {
  //   for (let i = 1; i < 101; i++) {
  //     let product = new IProduct();
  //     product.id = i;
  //     product.name = 'Product' + ' ' + i;
  //     product.unitPrice = i * 2;
  //     product.stock = i * 5;

  //     this.products.push(product);
  //   }
  // }

  addBasket(product: IProduct) {
    let basket = new IBasket();
    basket.product = product;
    basket.quantity = 1;
    // this.store.dispatch(BasketAction.addBasket({ basket: basket }));

    this.basketService.post(basket);
    window.location.reload();
  }
}
