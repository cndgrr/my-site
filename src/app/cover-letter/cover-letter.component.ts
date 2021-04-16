import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cover-letter',
  template: `
    <section class="cover-letter">
      <h2 class="cover-letter__title">
        Cover <br />
        Letter
      </h2>
      <div class="cover-letter__content">
        <p>
          I believe in transparent communication and authenticity through the
          whole recruitment process as the key to find and hire top talent. With
          more than 3 years of experience as an IT Recruiter, I’ve been working
          with IT profiles on LATAM, US, and UE. I also help to upgrade the
          talent’s Resume to the specific position. I’m always looking to ask
          and learn about the new tendencies in the IT market.
        </p>
        <p>
          I developed my interest in internet-related careers after working for
          a small software company. Soon I was fascinated about web development
          and how it comes to life for the final users (like me). I learned how
          useful Agile Methodology can be for complex software development in a
          fast growing environment. Today, I enjoy my work, matching the right
          talent with the right position, looking forward to a long lasting
          relationship between everyone involved in the project.
        </p>
        <p>
          Another thing about me, I’m Venezuelan with Spanish heritage.
          Therefore, hablo español!
        </p>
      </div>
    </section>
  `,
  styleUrls: ['./cover-letter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoverLetterComponent {}
