import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user-form',
  template: `
    <h2>Edition utilisateur</h2>
    <form>
      <app-form-input label="Nom">
        <input id="name" />
      </app-form-input>
      <app-form-input label="Email">
        <input id="email" type="email" />
      </app-form-input>
      <button type="submit">Enregistrer</button>
    </form>
  `,
})
export class UserFormComponent {}
