import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-admin-config',
  template: `
    <h2>Configuration avancée</h2>
    <app-card>
      <p>Paramètres globaux et outils d'administration.</p>
    </app-card>
  `,
})
export class AdminConfigComponent {}
