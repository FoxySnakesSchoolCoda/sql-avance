import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user-tickets',
  template: `
    <h3>Billets de l'utilisateur</h3>
    <app-card>
      <p>Gestion des billets réservés par l'utilisateur.</p>
    </app-card>
  `,
})
export class UserTicketsComponent {}
