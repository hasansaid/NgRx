import { BasketService } from './../../../services/basket.service';
import { Stores } from './../../../store/store';
import { IBasket } from 'src/app/models/basket.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  baskets: IBasket[] = [];
  basketCount$ = 0;
  baskets$: IBasket[] = [];
  extra$: Observable<IBasket[]>;
  constructor(
    private basketService: BasketService,
    private store: Store<Stores['baskets']>
  ) {
    this.store.select('baskets').subscribe((a) => {
      this.basketCount$ = a.length;
      this.baskets$ = a;
    });
  }

  ngOnInit(): void {
    this.getBasket();
  }

  getBasket() {
    this.basketService.getBaskets().subscribe((data) => {
      this.baskets = data;
      // console.log(this.baskets);
    });
  }
}
