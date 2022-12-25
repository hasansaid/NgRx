import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  count: number = 0;
  message: string = 'Hi I am Hasan Said.';
  constructor() {}
}
