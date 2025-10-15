import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-event-chat',
  template: `
    <h3>Chat de l'événement</h3>
    <app-card>
      <p>Espace d'échange entre les participants.</p>
    </app-card>
  `,
})
export class EventChatComponent {}
