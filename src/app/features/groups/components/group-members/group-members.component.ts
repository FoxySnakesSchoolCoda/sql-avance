import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-group-members',
  template: `
    <h3>Membres du groupe</h3>
    <app-card>
      <p>Gestion des membres et des rôles.</p>
    </app-card>
  `,
})
export class GroupMembersComponent {}
