import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-event-form',
  template: `
    <h2>Créer / Modifier un événement</h2>
    <form>
      <app-form-input label="Titre">
        <input id="title" />
      </app-form-input>
      <app-form-input label="Date">
        <input id="date" type="date" />
      </app-form-input>
      <app-form-input label="Lieu">
        <input id="location" />
      </app-form-input>
      <button type="submit">Enregistrer</button>
    </form>
  `,
})
export class EventFormComponent {}
