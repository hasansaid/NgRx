import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  @Input() count: number = 0;
  @Input() message: string = '';
  constructor() {}

  ngOnInit(): void {}
}
