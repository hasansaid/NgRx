import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-count',
  templateUrl: './main-count.component.html',
  styleUrls: ['./main-count.component.css'],
})
export class MainCountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  count: number = 0;
  message: string;
  addCount(event: number) {
    this.count = event;
  }
  send(event: string) {
    this.message = event;
  }
}
