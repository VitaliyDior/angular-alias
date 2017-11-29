import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { SettingsService } from '../services/settings.service';
import { GameHistoryService } from '../services/game-history.service';

@Component({
  selector: 'app-team-result',
  templateUrl: './team-result.component.html',
  styleUrls: ['./team-result.component.css'],
  providers: [TeamService, SettingsService]
})
export class TeamResultComponent implements OnInit {

  @Input() teamGameHistory;
  @Input() teamId;

  result: {guessedCount: number, skippedCount: number, pointsCount: number};
  teamName;
  constructor(
      private teamService: TeamService,
      private historyService: GameHistoryService,
      private settings: SettingsService
  ) {

  }

  ngOnInit() {
    this.teamName = this.teamService.getById(this.teamId);
    this.result   = this.historyService.calculateTeamPoints(this.teamId);
  }

}
