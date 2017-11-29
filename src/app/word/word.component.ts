import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() guessed;
  @Input() word;
  @Input() guessedWordsCount;
  @Input() skippedWordsCount;
  @Input() hideButtons;
  @Output() played = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
// <app-word
// word="блокчейн"
// (guessed)="onWordGuessed()"
// (skipped)="onWordSkipped()"
//   ></app-word>
