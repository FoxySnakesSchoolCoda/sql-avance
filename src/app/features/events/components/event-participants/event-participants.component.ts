import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-event-participants',
  template: `
    <h3>Participants</h3>
    <app-card>
      <p>Liste et gestion des participants de l'événement.</p>
    </app-card>
  `,
})
export class EventParticipantsComponent {}
