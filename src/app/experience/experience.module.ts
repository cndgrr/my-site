import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ExperienceComponent } from './experience.component';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ExperienceComponent],
})
export class ExperienceModule {}
