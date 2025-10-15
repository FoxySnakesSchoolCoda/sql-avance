import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-gallery-form',
  template: `
    <h3>Ajouter un média</h3>
    <form>
      <app-form-input label="Titre">
        <input id="media-title" />
      </app-form-input>
      <app-form-input label="Fichier">
        <input id="media-file" type="file" />
      </app-form-input>
      <button type="submit">Uploader</button>
    </form>
  `,
})
export class GalleryFormComponent {}
