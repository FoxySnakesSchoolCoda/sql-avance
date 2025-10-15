import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-admin-events',
  template: `
    <h2>Administration des événements</h2>
    <app-card>
      <p>Supervision et modération de l'ensemble des événements.</p>
    </app-card>
  `,
})
export class AdminEventsComponent {}
