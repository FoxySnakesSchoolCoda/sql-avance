import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user-detail',
  template: `
    <h2>Profil utilisateur</h2>
    <app-card title="Informations utilisateur">
      <p>Visualisation du profil, des informations et activités.</p>
    </app-card>
  `,
})
export class UserDetailComponent {}
