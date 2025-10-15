import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-ticket-form',
  template: `
    <h3>Créer / Modifier un billet</h3>
    <form>
      <app-form-input label="Nom du billet">
        <input id="ticket-name" />
      </app-form-input>
      <app-form-input label="Prix">
        <input id="ticket-price" type="number" />
      </app-form-input>
      <button type="submit">Enregistrer</button>
    </form>
  `,
})
export class TicketFormComponent {}
