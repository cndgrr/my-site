import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeModule } from './welcome/welcome.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WelcomeModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
