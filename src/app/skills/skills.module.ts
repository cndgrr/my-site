import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillModule } from '../skill/skill.module';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, SkillModule],
  exports: [SkillsComponent],
})
export class SkillsModule {}
