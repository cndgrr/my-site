import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Experience } from '../core/interfaces/experience.interface';

@Component({
  selector: 'app-experience',
  template: `
    <article class="experience">
      <button class="experience__header" (click)="onToggle()">
        <h3 class="experience__title">{{ experience.title }}</h3>
        <fa-icon
          [icon]="faCaretDown"
          size="lg"
          class="experience__icon"
          [ngClass]="{ reverse: isOpen }"
        ></fa-icon>
      </button>
      <div class="experience__content" *ngIf="isOpen">
        <p class="experience__subtitle">{{ experience.subtitle }}</p>
        <ul>
          <li *ngFor="let task of experience.tasks">
            {{ task }}
          </li>
        </ul>
      </div>
    </article>
  `,
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  faCaretDown = faCaretDown;
  isOpen = false;

  @Input() experience!: Experience;

  onToggle() {
    this.isOpen = !this.isOpen;
  }
}
