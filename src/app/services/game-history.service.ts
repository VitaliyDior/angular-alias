import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable()
export class GameHistoryService {
  private settings;
  private teamId: number;
  private history: Array<any>;
  private byTeamPoints: Array<{guessedCount: number, skippedCount: number, pointsCount: number}> = [];

  constructor() {
    const storageContent = localStorage.getItem('gameHistory');
    this.history = !!storageContent ? JSON.parse(storageContent) : [];
    this.settings = new SettingsService;
  }

  setTeam(teamId) {
    this.teamId = teamId;
    this.initTeamHistory(this.teamId);
  }
  push(historyPoint) {
    this.history[this.teamId].push(historyPoint);
    this.store();
  }

  get() {
    return this.history;
  }

  clean() {
    this.history = [];
    this.store();
  }

  getWinner(): number {
    let winner = -1;
    let maxPoints = -100000000;

    if (this.byTeamPoints.length !== this.history.length) {
      this.history.map (
          (th, i) => { this.calculateTeamPoints(i); }
      );
    }
    this.byTeamPoints.map(
        (teamPoints, i) => {
          if (teamPoints.pointsCount >= maxPoints) {
            winner = i;
            maxPoints = teamPoints.pointsCount;
          }
        }
    );
    return winner;
  }

  calculateTeamPoints(teamId): {guessedCount: number, skippedCount: number, pointsCount: number} {
    const teamPoints = {
      guessedCount: 0,
      skippedCount: 0,
      pointsCount:  0,
    };
    this.history[teamId].map(
        word => {
          word.guessed ?  teamPoints.guessedCount++ : teamPoints.skippedCount++;
        }
    );

    teamPoints.pointsCount = this.settings.get().enableWordSkippingPenalty ?
                                      teamPoints.guessedCount - teamPoints.skippedCount : teamPoints.guessedCount;

    this.byTeamPoints[teamId] = teamPoints;
    return this.byTeamPoints[teamId];
  }


  private initTeamHistory(teamId) {
      this.history[teamId] = [];
      this.store();
  }

  private store() {
    localStorage.setItem('gameHistory', JSON.stringify(this.history));
  }


}
