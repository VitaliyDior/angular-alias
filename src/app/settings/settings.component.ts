import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SettingsService } from '../services/settings.service';
import { Settings } from '../models/settings';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;

  constructor(
      public settings: SettingsService,
      private fb: FormBuilder,
      private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.settingsForm = this.fb.group(this.settings.get());
  }

  onSubmit() {
     this.settings.set(this.settingsForm.value);
     this.router.navigateByUrl('home');

  }
  toDefaults() {
    this.settings.toDefault();
    this.settingsForm.setValue(this.settings.get());

  }

  private prepareSave(): Settings {
    return ;
  }
}
