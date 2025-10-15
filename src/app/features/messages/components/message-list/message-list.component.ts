import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-message-list',
  template: `
    <h2>Messagerie</h2>
    <app-card title="Conversations">
      <p>Liste des conversations et fils de discussion.</p>
    </app-card>
  `,
})
export class MessageListComponent {}
