import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-gallery-detail',
  template: `
    <h3>Détail média</h3>
    <app-card>
      <p>Visualisation d'un média de la galerie.</p>
    </app-card>
  `,
})
export class GalleryDetailComponent {}
