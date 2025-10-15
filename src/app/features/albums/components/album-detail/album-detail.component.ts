import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-album-detail',
  template: `
    <h3>Détail de l'album</h3>
    <app-card>
      <p>Consultez les photos et informations de l'album.</p>
    </app-card>
  `,
})
export class AlbumDetailComponent {}
