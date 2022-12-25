import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css'],
})
export class AddCountComponent implements OnInit {
  count: number = 0;

  @Output() myEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  addCount() {
    this.count += 1;
    this.myEvent.emit(this.count);
  }

  deleteCount() {
    this.count -= 1;
    this.myEvent.emit(this.count);
  }

  resetCount() {
    this.count = 0;
    this.myEvent.emit(this.count);
  }
}
