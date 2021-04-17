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

        <div class="about-body">
          <dl>
            <div>
              <dt>NAME:</dt>
              <dd>Cindy Guerra</dd>
            </div>
            <div>
              <dt>LOCATION:</dt>
              <dd>Montevideo, UY <span aria-hidden="true">🇺🇾</span></dd>
            </div>
            <div>
              <dt>LANGUAGES:</dt>
              <dd>Spanish, English</dd>
            </div>
            <div>
              <dt>INTERESTS:</dt>
              <dd>
                Cooking <span aria-hidden="true">👩‍🍳</span>, Horror movies
                <span aria-hidden="true">👻</span>, Travel
                <span aria-hidden="true">🛫</span>
              </dd>
            </div>
            <div>
              <dt>BUSINESS EMAIL:</dt>
              <dd>cindyguerratas@gmail.com</dd>
            </div>
          </dl>

          <figure>
            <img alt="" src="assets/images/cv.png" />
            <figcaption>Download CV</figcaption>
          </figure>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
