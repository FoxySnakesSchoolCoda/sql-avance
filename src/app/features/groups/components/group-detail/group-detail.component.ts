import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-group-detail',
  template: `
    <h2>Détails du groupe</h2>
    <app-card title="Présentation">
      <p>Informations principales du groupe sélectionné.</p>
    </app-card>
  `,
})
export class GroupDetailComponent {}
