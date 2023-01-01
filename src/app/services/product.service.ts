import { Observable } from 'rxjs';
import { IProduct } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {}

  getAllProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.apiUrl);
  }

  addProduct(product: IProduct) {
    return this.httpClient.post(this.apiUrl, product);
  }
}
