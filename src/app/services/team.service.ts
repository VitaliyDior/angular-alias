import { Injectable } from '@angular/core';
import { Team } from '../models/team';

@Injectable()
export class TeamService {
  currentTeamId = 0;
  private teamsList: Array<string> = [];
  private initialTeams: Array<string> = ['Dirty Pigs', 'Smarty Dogs'];
  constructor() {
      const storageContent = localStorage.getItem('storedTeams');
      this.teamsList =  !!storageContent ? JSON.parse(storageContent) : this.initialTeams;
  }

  get(): Array<string> {
      return this.teamsList;
  }
  getById(id: number): string {
      return this.teamsList[id];
  }
  add(name: string) {
      this.teamsList.push('');
      this.store();
  }
  remove(index: number) {
      this.teamsList.splice(index, 1);
      this.store();
  }
  update(index: number, name: string) {
      this.teamsList[index] = name;
      this.store();
  }

  getNextTeam(): {id: number; name: string} {
      return   {id: this.currentTeamId, name: this.teamsList[this.currentTeamId++]};
  }

  isNextTeamExixts() {
      return !!this.teamsList[this.currentTeamId];
  }

   private store() {
      localStorage.setItem('storedTeams', JSON.stringify(this.teamsList));
   }

}
