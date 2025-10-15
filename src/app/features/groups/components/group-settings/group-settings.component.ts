import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-group-settings',
  template: `
    <h3>Paramètres du groupe</h3>
    <app-card>
      <p>Configuration et permissions du groupe.</p>
    </app-card>
  `,
})
export class GroupSettingsComponent {}
