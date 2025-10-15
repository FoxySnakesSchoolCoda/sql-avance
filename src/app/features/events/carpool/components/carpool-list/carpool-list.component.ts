import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-carpool-list',
  template: `
    <h3>Covoiturage</h3>
    <app-card>
      <p>Coordonnez les trajets vers l'événement.</p>
    </app-card>
  `,
})
export class CarpoolListComponent {}
