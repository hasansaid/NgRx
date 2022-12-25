import { CountService } from './../../services/count.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css'],
})
export class AddCountComponent implements OnInit {
  count: number = 0;
  message: string = 'My name is Hasan Said. -Send me...-';

  @Output() sendMessage = new EventEmitter<string>();
  @Output() myEvent = new EventEmitter<number>();
  constructor(public countService: CountService) {}

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
  sendedMessage() {
    this.message = 'My name is Hasan Said. -I was sent..-';
    this.sendMessage.emit(this.message);
  }

  addSCount() {
    this.countService.count += 1;
  }

  deleteSCount() {
    this.countService.count -= 1;
  }
  resetSCount() {
    this.countService.count = 0;
  }
  sendedSMessage() {
    this.countService.message = 'I am a computer engineer.';
  }
}
