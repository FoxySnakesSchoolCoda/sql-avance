import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-album-form',
  template: `
    <h3>Créer / Modifier un album</h3>
    <form>
      <app-form-input label="Titre">
        <input id="album-title" />
      </app-form-input>
      <app-form-input label="Description">
        <textarea id="album-description"></textarea>
      </app-form-input>
      <button type="submit">Enregistrer</button>
    </form>
  `,
})
export class AlbumFormComponent {}
