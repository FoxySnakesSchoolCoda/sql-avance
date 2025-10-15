import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-poll-list',
  template: `
    <h3>Sondages</h3>
    <app-card>
      <p>Liste des sondages associés à l'événement.</p>
    </app-card>
  `,
})
export class PollListComponent {}
