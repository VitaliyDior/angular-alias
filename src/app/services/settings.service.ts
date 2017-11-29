import { Injectable } from '@angular/core';
import { Settings } from '../models/settings';
@Injectable()
export class SettingsService {
  private settings;
  constructor() {
      this.settings = this.load();
  }
  get() {
       return this.settings;
  }

  set(settings: Settings) {
     this.settings = settings;
     this.store(this.settings);
  }

  toDefault() {
      this.set(new Settings);
  }

  private store(settings: Settings) {
      localStorage.setItem('settings', JSON.stringify(settings));
  }

  private load(): Settings {
      const rawSettings = localStorage.getItem('settings');
      return rawSettings ? JSON.parse(rawSettings) : new Settings;
  }


}
