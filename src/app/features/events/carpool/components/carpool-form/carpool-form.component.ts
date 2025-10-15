import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-carpool-form',
  template: `
    <h3>Proposer / Modifier un trajet</h3>
    <form>
      <app-form-input label="Point de départ">
        <input id="origin" />
      </app-form-input>
      <app-form-input label="Heure de départ">
        <input id="departure-time" type="time" />
      </app-form-input>
      <button type="submit">Publier</button>
    </form>
  `,
})
export class CarpoolFormComponent {}
