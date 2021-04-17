import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-thumbnails',
  template: `
    <section class="thumbnails">
      <figure>
        <img src="assets/images/humanistic-approach.png" />
        <figcaption>Humanistic Approach</figcaption>
      </figure>
      <figure>
        <img src="assets/images/transparency.png" />
        <figcaption>Transparency</figcaption>
      </figure>
      <figure>
        <img src="assets/images/global-recruitment.png" />
        <figcaption>Global Recruitment</figcaption>
      </figure>
    </section>
  `,
  styleUrls: ['./thumbnails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThumbnailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
