import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-event-list',
  template: `
    <h2>Événements</h2>
    <app-card title="Tous les événements">
      <p>Planifiez, découvrez et suivez les événements LoveBook.</p>
    </app-card>
  `,
})
export class EventListComponent {}
