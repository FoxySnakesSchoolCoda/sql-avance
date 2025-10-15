import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user-list',
  template: `
    <h2>Utilisateurs</h2>
    <app-card title="Liste des utilisateurs">
      <p>Affiche la liste des utilisateurs LoveBook.</p>
    </app-card>
  `,
})
export class UserListComponent {}
