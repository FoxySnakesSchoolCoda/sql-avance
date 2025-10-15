import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user-albums',
  template: `
    <h3>Albums de l'utilisateur</h3>
    <app-card>
      <p>Albums photo partagés par cet utilisateur.</p>
    </app-card>
  `,
})
export class UserAlbumsComponent {}
