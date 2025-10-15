import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-ticket-detail',
  template: `
    <h3>Détail du billet</h3>
    <app-card>
      <p>Informations détaillées sur un billet spécifique.</p>
    </app-card>
  `,
})
export class TicketDetailComponent {}
