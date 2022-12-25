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
  basketCount$ = 0;
  baskets$: IBasket[] = [];
  constructor(private store: Store<{ baskets: IBasket[] }>) {
    this.store.select('baskets').subscribe((res) => {
      this.basketCount$ = res.length;
      this.baskets$ = res;
    });
  }

  ngOnInit(): void {}
}
