import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-shopping-list-list',
  template: `
    <h3>Liste de courses</h3>
    <app-card>
      <p>Suivi des besoins logistiques pour l'événement.</p>
    </app-card>
  `,
})
export class ShoppingListListComponent {}
