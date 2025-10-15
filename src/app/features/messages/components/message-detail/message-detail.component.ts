import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-message-detail',
  template: `
    <h3>Conversation</h3>
    <app-card>
      <p>Lecture d'une conversation spécifique.</p>
    </app-card>
  `,
})
export class MessageDetailComponent {}
