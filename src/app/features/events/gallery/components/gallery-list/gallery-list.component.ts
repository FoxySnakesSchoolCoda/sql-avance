import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-gallery-list',
  template: `
    <h3>Galerie</h3>
    <app-card>
      <p>Photos et médias partagés pendant l'événement.</p>
    </app-card>
  `,
})
export class GalleryListComponent {}
