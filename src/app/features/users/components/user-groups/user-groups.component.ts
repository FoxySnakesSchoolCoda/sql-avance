import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user-groups',
  template: `
    <h3>Groupes de l'utilisateur</h3>
    <app-card>
      <p>Groupes rejoints par l'utilisateur.</p>
    </app-card>
  `,
})
export class UserGroupsComponent {}
