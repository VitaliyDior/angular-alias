import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],

})
export class TeamComponent implements OnInit {

  @Input()  teamName;
  @Input()  index;
  @Input()  showRemover;

  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  removeTeam() {
    this.remove.emit(this.index);
  }
  onNameUpdate(e) {
    this.update.emit({id: this.index, name: e.target.value});
  }

}
