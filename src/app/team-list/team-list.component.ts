import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})
export class TeamListComponent implements OnInit {

  public teamsList;
  constructor(
      public teamService: TeamService
  ) {
    this.teamsList = this.teamService.get();
  }

  ngOnInit() {
  }

  addTeam() {
    this.teamService.add('');
    this.teamsList = this.teamService.get();
  }

  onTeamRemove(index) {
    this.teamService.remove(index);
    this.teamsList = this.teamService.get();
  }

  onTeamNameUpdate(team) {
    this.teamService.update(team.id, team.name);
    return true;
  }
}
