import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Skill } from '../core/interfaces/skill.interface';

@Component({
  selector: 'app-skill',
  template: `
    <article class="skill">
      <div class="skill__title">
        <p [ngStyle]="{ 'max-width': skill.value + '%' }">{{ skill.title }}</p>
      </div>
      <p class="skill__value">{{ skill.value }}%</p>
    </article>
  `,
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent {
  @Input() skill!: Skill;
}
