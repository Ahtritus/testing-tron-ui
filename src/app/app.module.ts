import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ThemeService, TronUiModule } from 'tron-ui';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [AppComponent, CanvasComponent],
  imports: [BrowserModule, TronUiModule ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
