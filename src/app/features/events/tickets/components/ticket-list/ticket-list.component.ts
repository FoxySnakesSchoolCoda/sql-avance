import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-ticket-list',
  template: `
    <h3>Billetterie</h3>
    <app-card>
      <p>Vue d'ensemble des billets disponibles pour l'événement.</p>
    </app-card>
  `,
})
export class TicketListComponent {}
