import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">MENU</header>
    <main>
      <section class="welcome">
        <div>
          <p class="welcome__title">
            Hi, <br />
            I’m <b>Cindy</b> <br />
            <b>Guerra</b>.
          </p>
          <button class="welcome__cta">Ask for Quote</button>
        </div>
        <figure class="welcome__image">
          <img
            srcset="
              assets/images/cindy-large.png 1000w,
              assets/images/cindy-small.png  300w
            "
          />
        </figure>
      </section>
      <section class="about">ABOUT</section>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
