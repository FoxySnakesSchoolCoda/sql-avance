import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-shopping-list-detail',
  template: `
    <h3>Détail de l'élément</h3>
    <app-card>
      <p>Informations sur un élément spécifique de la liste.</p>
    </app-card>
  `,
})
export class ShoppingListDetailComponent {}
