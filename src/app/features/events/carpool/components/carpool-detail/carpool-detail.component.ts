import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-carpool-detail',
  template: `
    <h3>Détail du trajet</h3>
    <app-card>
      <p>Informations sur un trajet de covoiturage.</p>
    </app-card>
  `,
})
export class CarpoolDetailComponent {}
