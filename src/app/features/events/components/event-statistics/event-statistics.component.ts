import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-event-statistics',
  template: `
    <h3>Statistiques de l'événement</h3>
    <app-card>
      <p>Indicateurs clés de performance pour l'événement.</p>
    </app-card>
  `,
})
export class EventStatisticsComponent {}
