import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  basketCount$ = this.store.select('basketCount');
  constructor(private store: Store<{ basketCount: number }>) {}

  ngOnInit(): void {}
}
