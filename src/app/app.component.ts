import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">MENU</header>
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
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
