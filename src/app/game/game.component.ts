import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { Settings } from '../models/settings';
import { TeamService } from '../services/team.service';
import { VocabularyService } from '../services/vocabulary.service';
import { GameHistoryService } from '../services/game-history.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [SettingsService, TeamService, VocabularyService, GameHistoryService]
})
export class GameComponent implements OnInit {

  public isTeamListSet     = false;
  public isPrepareForRound = true;
  public gameOver          = false;
  public isRoundFinish     = false;

  public word: string;
  public settings: Settings;
  public currentTeam: {id: number; name: string};

  public wordsGuessed = 0;
  public wordsSkipped = 0;
  constructor(
      private settingsService: SettingsService,
      private teamService: TeamService,
      private vocabularyService: VocabularyService,
      private historyService: GameHistoryService
  ) {
    this.vocabularyService.load();
    this.settings = this.settingsService.get();
  }

  ngOnInit() {
  }

  prepareForRound() {
    this.isTeamListSet = true;
    this.currentTeam = this.teamService.getNextTeam();
    this.word        = this.vocabularyService.getNextWord();
  }

  gameStart() {
    this.isPrepareForRound = false;
    this.wordsGuessed = this.wordsSkipped = 0;
    this.historyService.setTeam(this.currentTeam.id);
  }

  onWordPlayed(word) {
    word.guessed ? this.wordsGuessed++ : this.wordsSkipped++;
    this.historyService.push(word);
    this.word = this.vocabularyService.getNextWord();
  }

  onRoundFinish() {
    if (!this.teamService.isNextTeamExixts()) {
      this.finishGame();
      return;
    }
    this.finishRound();
  }

  private finishGame() {
    this.isRoundFinish = true;
    setTimeout(
        _ => {
          this.gameOver = true;
          this.isRoundFinish = false;
          this.isPrepareForRound = true;
        },
        2000
    );
  }
  private finishRound() {
    this.isRoundFinish = true;
    setTimeout(
        _ => {
          this.isRoundFinish = false;
          this.isPrepareForRound = true;
          this.currentTeam = this.teamService.getNextTeam();
        },
        2000
    );
  }

}
