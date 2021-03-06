import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <section class="welcome">
      <div>
        <h2 class="welcome__title">
          Hi <span aria-hidden="true">šš»,</span> <br />
          Iām <b>Cindy</b> <br />
          <b>Guerra</b>.
        </h2>
        <p class="welcome__subtitle">Talent Acquisition Specialist</p>
        <button class="button welcome__cta">Ask for Quote</button>
      </div>
      <figure class="welcome__image">
        <img
          srcset="
            assets/images/cindy-large.png 1000w,
            assets/images/cindy-small.png  300w
          "
          alt=""
        />
      </figure>
    </section>
  `,
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {}
