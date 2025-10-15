import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-form-input',
  template: `
    <div class="form-field">
      <label *ngIf="label" [for]="id">{{ label }}</label>
      <ng-content></ng-content>
      <small class="hint" *ngIf="hint">{{ hint }}</small>
    </div>
  `,
  styles: [
    `
      .form-field {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      label {
        font-weight: 600;
      }
      .hint {
        color: #6b7280;
      }
    `,
  ],
})
export class FormInputComponent {
  @Input() label?: string;
  @Input() hint?: string;
  @Input() id?: string;

  constructor(readonly controlContainer: ControlContainer) {}
}
