import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-group-form',
  template: `
    <h2>Créer / Modifier un groupe</h2>
    <form>
      <app-form-input label="Nom du groupe">
        <input id="group-name" />
      </app-form-input>
      <app-form-input label="Description">
        <textarea id="group-description"></textarea>
      </app-form-input>
      <button type="submit">Enregistrer</button>
    </form>
  `,
})
export class GroupFormComponent {}
