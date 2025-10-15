import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-group-chat',
  template: `
    <h3>Chat du groupe</h3>
    <app-card>
      <p>Espace de messagerie instantanée entre les membres.</p>
    </app-card>
  `,
})
export class GroupChatComponent {}
