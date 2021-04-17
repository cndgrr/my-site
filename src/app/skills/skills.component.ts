import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Skill } from '../core/interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  template: `
    <section class="skills">
      <h2 class="skills__title">Skills</h2>
      <div class="skills__content">
        <app-skill *ngFor="let skill of skills" [skill]="skill"></app-skill>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skills: Skill[] = [
    { title: 'Boolean Search', value: 100 },
    { title: 'Sourcing', value: 100 },
    { title: 'Screening', value: 100 },
    { title: 'Interviewing', value: 100 },
    { title: 'Trello', value: 80 },
    { title: 'Google Suites', value: 70 },
  ];
}
