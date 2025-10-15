import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-group-list',
  template: `
    <h2>Groupes</h2>
    <app-card title="Explorer les groupes">
      <p>Gérez la découverte et la création de communautés.</p>
    </app-card>
  `,
})
export class GroupListComponent {}
