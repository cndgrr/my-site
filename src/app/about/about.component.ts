import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="about">
      <h2 class="about__title">About</h2>
      <div class="about__content">
        <p>
          Talent Acquisition Specialist for the Information Technology industry.
          I’m connecting with people around the world, finding the right job, a
          great match for them. I’ve searched for roles with most of the
          programming languages, technologies, tools, and frameworks in the
          industry. Working towards a more friendly recruitment process for all.
        </p>
        <p>
          I’m growing my professional connections to share new opportunities in
          the IT market from Trainee Juniors to Senior consultants. Offering
          options such as full-time/part-time, remote/on-site/flexible,
          contractor/permanent on worldwide positions.
        </p>
        <p>
          Also, I really enjoy meeting new people and learning a bit more each
          day about the IT world (and their neverending-upgrades/versions).
        </p>
        <dl>
          <dt>NAME:</dt>
          <dd>Cindy Guerra</dd>
          <br />
          <dt>LOCATION:</dt>
          <dd>Montevideo, UY</dd>
          <br />
          <dt>LANGUAGES:</dt>
          <dd>Spanish, English</dd>
          <br />
          <dt>INTERESTS:</dt>
          <dd>Cooking, Horror movies, Travel</dd>
          <br />
          <dt>BUSINESS EMAIL:</dt>
          <dd>cindyguerratas@gmail.com</dd>
        </dl>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
