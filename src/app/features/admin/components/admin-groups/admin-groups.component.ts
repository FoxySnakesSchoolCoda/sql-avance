import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-admin-groups',
  template: `
    <h2>Administration des groupes</h2>
    <app-card>
      <p>Contrôle et modération des groupes de la plateforme.</p>
    </app-card>
  `,
})
export class AdminGroupsComponent {}
