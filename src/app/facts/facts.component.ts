import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-facts',
  template: `
    <section class="facts">
      <h2 class="facts__title">Facts</h2>
      <div class="facts__content">
        <figure>
          <img src="assets/images/sign-offs.png" />
          <figcaption class="fact">
            <p class="fact__count">60+</p>
            <p class="fact__title">Sign offs</p>
          </figcaption>
        </figure>
        <figure>
          <img src="assets/images/client-locations.png" />
          <figcaption class="fact">
            <p class="fact__count">30+</p>
            <p class="fact__title">Client Locations</p>
          </figcaption>
        </figure>
        <figure>
          <img src="assets/images/connections.png" />
          <figcaption class="fact">
            <p class="fact__count">5K+</p>
            <p class="fact__title">Connections</p>
          </figcaption>
        </figure>
        <figure>
          <img src="assets/images/active-spots.png" />
          <figcaption class="fact">
            <p class="fact__count">40+</p>
            <p class="fact__title">Active Spots</p>
          </figcaption>
        </figure>
      </div>
    </section>
  `,
  styleUrls: ['./facts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
