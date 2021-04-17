import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences.component';
import { ExperienceModule } from '../experience/experience.module';

@NgModule({
  declarations: [ExperiencesComponent],
  imports: [CommonModule, ExperienceModule],
  exports: [ExperiencesComponent],
})
export class ExperiencesModule {}
