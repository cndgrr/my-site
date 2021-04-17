import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Experience } from '../core/interfaces/experience.interface';

@Component({
  selector: 'app-experiences',
  template: `
    <section class="experiences">
      <h2 class="experiences__title">Experience</h2>
      <div class="experiences__content">
        <app-experience
          *ngFor="let experience of experiences"
          [experience]="experience"
        ></app-experience>
      </div>
    </section>
  `,
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent {
  experiences: Experience[] = [
    {
      title: 'Technical TAS - Worldwide',
      subtitle: '2021 - Present',
      tasks: [
        'End-to-end recruitment process for IT roles in the US, UE, and LATAM.',
        'Free Resume upgrades for talents.',
      ],
    },
    {
      title: 'Talent Acquisition Specialist (TAS)',
      subtitle: '2020 - 2021',
      tasks: [
        'Track candidates with the required profile according to the project.',
        'Coordinate the sourcing with the team.',
        'Screening of potential talents.',
        'Coordinating meetings and evaluations for candidates.',
        'Coordinating and conducting interviews.',
        'Explanation of the contract and payment methods.',
        'Creation of Resumes to present potential talents to stakeholders.',
        `Search for profiles such as QA, Front-end, Back-end, Mobile, Database,
      functional analysts, support, and lead roles in LATAM.`,
      ],
    },
    {
      title: 'Proposal Coordinator',
      subtitle: '2019 - 2020',
      tasks: [
        `Coordination of general branding and formatting, proofreading,
        copyright, writter support, and graphic design support.`,
        'Management of aggressive timelines and deadlines.',
        'Content search for RFP (Request For Proposal) questions.',
        'First draft/template development.',
        'Attending status calls across global time zones.',
        `General creation and formatting support after the team passes to orals
        presentations.`,
        'Sourcing bios from internal repositories',
      ],
    },
    {
      title: 'Jr IT Recruiter',
      subtitle: '2016 - 2018',
      tasks: [
        'Track candidates with the required profile according to the project.',
        'Explanation of the contract and payment methods.',
        'Coordinating meetings and evaluations for candidates.',
        'Coordinating and conducting interviews.',
        `Pre-screen all resumes prior to sending them to corporate hiring
        managers for consideration.`,
        'Screen all applicants based on their qualifications and background',
      ],
    },
  ];
}
