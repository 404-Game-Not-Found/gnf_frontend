import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameDisplayComponent } from './game-display/game-display.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, GameDisplayComponent],
  imports: [BrowserModule, MatMenuModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
