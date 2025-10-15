import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-admin-users',
  template: `
    <h2>Administration utilisateurs</h2>
    <app-card>
      <p>Gestion centralisée des comptes utilisateurs.</p>
    </app-card>
  `,
})
export class AdminUsersComponent {}
