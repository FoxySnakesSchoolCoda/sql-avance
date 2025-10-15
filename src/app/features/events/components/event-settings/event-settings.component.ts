import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-event-settings',
  template: `
    <h3>Paramètres de l'événement</h3>
    <app-card>
      <p>Configurer les préférences et options de l'événement.</p>
    </app-card>
  `,
})
export class EventSettingsComponent {}
