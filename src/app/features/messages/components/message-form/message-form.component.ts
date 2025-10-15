import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-message-form',
  template: `
    <h3>Nouveau message</h3>
    <form>
      <app-form-input label="Destinataire">
        <input id="recipient" />
      </app-form-input>
      <app-form-input label="Message">
        <textarea id="body"></textarea>
      </app-form-input>
      <button type="submit">Envoyer</button>
    </form>
  `,
})
export class MessageFormComponent {}
