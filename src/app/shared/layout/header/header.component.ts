import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title = 'Alias';
  public menu = [
    {link: 'home', title: 'Home'},
    {link: 'settings', title: 'Settings'},
    {link: 'game', title: 'Start Game'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
