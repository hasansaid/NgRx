import { countIncrement } from './../../../store/acitons/counter.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.css'],
})
export class NumberControlComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  addCount() {
    this.store.dispatch(countIncrement());
  }
}
