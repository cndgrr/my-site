import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeModule } from './welcome/welcome.module';
import { AboutModule } from './about/about.module';
import { SkillsModule } from './skills/skills.module';
import { CoverLetterModule } from './cover-letter/cover-letter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WelcomeModule,
    AboutModule,
    SkillsModule,
    CoverLetterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
