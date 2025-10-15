import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-album-list',
  template: `
    <h2>Albums</h2>
    <app-card title="Tous les albums">
      <p>Parcourez les albums photo des membres et des événements.</p>
    </app-card>
  `,
})
export class AlbumListComponent {}
