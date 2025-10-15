import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-poll-detail',
  template: `
    <h3>Détails du sondage</h3>
    <app-card>
      <p>Afficher les résultats et choix du sondage.</p>
    </app-card>
  `,
})
export class PollDetailComponent {}
