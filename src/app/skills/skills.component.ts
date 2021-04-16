import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <section class="skills">
      <h2 class="skills__title">Skills</h2>
      <div class="skills__content">
        <ul>
          <li class="skill">
            <div class="skill__title">
              <p>Boolean Search</p>
            </div>
            <p class="skill__value">100%</p>
          </li>
          <li class="skill">
            <div class="skill__title">
              <p>Sourcing</p>
            </div>
            <p class="skill__value">100%</p>
          </li>
          <li class="skill">
            <div class="skill__title">
              <p>Screening</p>
            </div>
            <p class="skill__value">100%</p>
          </li>
          <li class="skill">
            <div class="skill__title">
              <p>Interviewing</p>
            </div>
            <p class="skill__value">100%</p>
          </li>
          <li class="skill">
            <div class="skill__title">
              <p style="max-width: 80%">Trello</p>
            </div>
            <p class="skill__value">80%</p>
          </li>
          <li class="skill">
            <div class="skill__title">
              <p style="max-width: 70%">Google Suites</p>
            </div>
            <p class="skill__value">70%</p>
          </li>
        </ul>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {}
