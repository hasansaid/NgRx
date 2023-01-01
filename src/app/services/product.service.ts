import { Observable } from 'rxjs';
import { IProduct } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products';
  products: IProduct[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllProduct() {
    this.httpClient
      .get<IProduct[]>(this.apiUrl)
      .subscribe((data) => (this.products = data));
  }

  addProduct(product: IProduct) {
    return this.httpClient.post(this.apiUrl, product);
  }
}
