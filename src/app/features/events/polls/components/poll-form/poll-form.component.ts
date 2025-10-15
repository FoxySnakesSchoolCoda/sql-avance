import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-poll-form',
  template: `
    <h3>Créer / Modifier un sondage</h3>
    <form>
      <app-form-input label="Question">
        <input id="question" />
      </app-form-input>
      <button type="submit">Enregistrer</button>
    </form>
  `,
})
export class PollFormComponent {}
