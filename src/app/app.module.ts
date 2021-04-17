import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeModule } from './welcome/welcome.module';
import { AboutModule } from './about/about.module';
import { SkillsModule } from './skills/skills.module';
import { CoverLetterModule } from './cover-letter/cover-letter.module';
import { ThumbnailsModule } from './thumbnails/thumbnails.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperiencesModule } from './experiences/experiences.module';
import { FactsModule } from './facts/facts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WelcomeModule,
    AboutModule,
    SkillsModule,
    CoverLetterModule,
    ThumbnailsModule,
    FontAwesomeModule,
    ExperiencesModule,
    FactsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
