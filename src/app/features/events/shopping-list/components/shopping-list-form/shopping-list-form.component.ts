import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-shopping-list-form',
  template: `
    <h3>Ajouter / Modifier un élément</h3>
    <form>
      <app-form-input label="Article">
        <input id="item-name" />
      </app-form-input>
      <app-form-input label="Quantité">
        <input id="item-quantity" type="number" />
      </app-form-input>
      <button type="submit">Enregistrer</button>
    </form>
  `,
})
export class ShoppingListFormComponent {}
