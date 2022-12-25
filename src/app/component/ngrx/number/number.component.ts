import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
})
export class NumberComponent implements OnInit {
  number$: Observable<number>;
  constructor(private store: Store<{ number: number }>) {
    this.number$ = store.select('number');
  }

  ngOnInit(): void {}
}
