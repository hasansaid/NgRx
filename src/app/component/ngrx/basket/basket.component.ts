import { IBasket } from 'src/app/models/basket.model';
import { BasketService } from './../../../services/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  baskets: IBasket[] = [];
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.getBaskets();
  }

  getBaskets() {
    this.basketService.getBaskets().subscribe((data) => (this.baskets = data));
  }

  removeProduct(id: number) {
    this.basketService.removeBasket(id).subscribe();
    window.location.reload();
  }
}
