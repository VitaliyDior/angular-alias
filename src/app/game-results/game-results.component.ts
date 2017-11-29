import { Component, OnInit } from '@angular/core';
import { GameHistoryService } from '../services/game-history.service';
import { Router } from '@angular/router';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css'],
  providers: [GameHistoryService, TeamService]
})
export class GameResultsComponent implements OnInit {



  public results;
  public winnerTeam;
  constructor(
      private historyService: GameHistoryService,
      private teamService: TeamService,
      private router: Router
  ) {
    this.results = this.historyService.get();
  }

  ngOnInit() {
    console.log(this.historyService.getWinner());
    this.winnerTeam = this.teamService.getById(this.historyService.getWinner());
  }

  onNewGameStart() {
    this.historyService.clean();
    this.router.navigateByUrl('home');
  }

}
