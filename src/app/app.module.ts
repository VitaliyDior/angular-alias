import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { WordComponent } from './word/word.component';

import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule,
  MatButtonModule, MatInputModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';

import 'hammerjs';
import { TeamComponent } from './team/team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { GameResultsComponent } from './game-results/game-results.component';
import { WordPluralPipe } from './pipes/word-plural.pipe';
import { TeamResultComponent } from './team-result/team-result.component';
@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    WordComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    SettingsComponent,
    GameComponent,
    TeamComponent,
    TeamListComponent,
    GameResultsComponent,
    WordPluralPipe,
    TeamResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'home',     component: HomeComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'game',     component: GameComponent},
      {path: '',   redirectTo: 'home', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
