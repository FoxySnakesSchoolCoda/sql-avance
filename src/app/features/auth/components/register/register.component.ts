import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-register',
  template: `
    <h2 class="auth-title">Créer un compte</h2>
    <form>
      <app-form-input label="Nom complet">
        <input id="name" />
      </app-form-input>
      <app-form-input label="Email">
        <input id="email" type="email" />
      </app-form-input>
      <app-form-input label="Mot de passe">
        <input id="password" type="password" />
      </app-form-input>
      <button type="submit">S'inscrire</button>
    </form>
  `,
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      button {
        background-color: #42b72a;
        color: #fff;
        border: none;
        border-radius: 999px;
        padding: 0.75rem 1.5rem;
        cursor: pointer;
      }
    `,
  ],
})
export class RegisterComponent {}
