import { IProduct } from './product.model';
export class IBasket {
  id: number = 0;
  product: IProduct;
  quantity: number = 0;
}
