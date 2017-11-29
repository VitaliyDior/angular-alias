import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output() finish = new EventEmitter();
  @Input() interval;
  timeLeft = 0;
  constructor() {
  }

  ngOnInit() {
    this.timeLeft = this.interval;
    const handle = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        clearInterval(handle);
        this.finish.emit();
      }
    }, 1000);
  }

  start() {

  }

}
