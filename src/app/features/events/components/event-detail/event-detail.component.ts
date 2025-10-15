import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-event-detail',
  template: `
    <h2>Détails de l'événement</h2>
    <app-card title="Présentation">
      <p>Informations détaillées sur l'événement sélectionné.</p>
    </app-card>
  `,
})
export class EventDetailComponent {}
