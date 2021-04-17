import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Experience } from '../core/interfaces/experience.interface';

@Component({
  selector: 'app-experience',
  template: `
    <article class="experience">
      <button class="experience__header">
        <h3 class="experience__title">{{ experience.title }}</h3>
        <div class="experience__trigger">
          <p class="experience__subtitle">{{ experience.subtitle }}</p>
          <fa-icon
            [icon]="faCaretUp"
            size="lg"
            class="experience__icon"
          ></fa-icon>
        </div>
      </button>
      <ul class="experience__content">
        <li *ngFor="let task of experience.tasks">
          {{ task }}
        </li>
      </ul>
    </article>
  `,
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  faCaretUp = faCaretUp;
  @Input() experience!: Experience;
}
