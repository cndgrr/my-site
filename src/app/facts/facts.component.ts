import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Fact } from '../core/interfaces/fact.interface';

@Component({
  selector: 'app-facts',
  template: `
    <section class="facts">
      <h2 class="facts__title">Facts</h2>
      <div class="facts__content">
        <figure *ngFor="let fact of facts">
          <img alt="" [src]="fact.imagePath" />
          <figcaption class="fact">
            <p class="fact__count">{{ fact.count }}</p>
            <p class="fact__title">{{ fact.title }}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  `,
  styleUrls: ['./facts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactsComponent {
  facts: Fact[] = [
    {
      title: 'Connections',
      count: '5K',
      imagePath: 'assets/images/connections.png',
    },
    {
      title: 'Client Locations',
      count: '30',
      imagePath: 'assets/images/client-locations.png',
    },
    {
      title: 'Active Spots',
      count: '40',
      imagePath: 'assets/images/active-spots.png',
    },
    {
      title: 'Sign offs',
      count: '60',
      imagePath: 'assets/images/sign-offs.png',
    },
  ];
}
