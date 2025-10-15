import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user-events',
  template: `
    <h3>Événements de l'utilisateur</h3>
    <app-card>
      <p>Liste des événements où l'utilisateur participe.</p>
    </app-card>
  `,
})
export class UserEventsComponent {}
