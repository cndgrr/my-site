import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">MENU</header>
    <main>
      <app-welcome></app-welcome>
      <app-about></app-about>
      <app-skills></app-skills>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
