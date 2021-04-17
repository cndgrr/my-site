import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-welcome></app-welcome>
      <div class="content">
        <app-about></app-about>
        <app-skills></app-skills>
        <app-cover-letter></app-cover-letter>
        <app-thumbnails></app-thumbnails>
        <app-experiences></app-experiences>
        <app-facts></app-facts>
      </div>
      <ul class="social-networks">
        <li>
          <a
            href="https://github.com/cndgrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/images/github.png" alt="Go to my github" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img src="assets/images/twitter.png" alt="Go to my twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/cindy-guerra-mendez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/images/linkedin.png" alt="Go to my linkedin" />
          </a>
        </li>
      </ul>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
