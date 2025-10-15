import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-loader',
  template: `
    <div class="loader" [ngClass]="size">
      <span class="spinner"></span>
      <span *ngIf="label">{{ label }}</span>
    </div>
  `,
  styles: [
    `
      .loader {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        color: #3b5998;
      }
      .spinner {
        width: 1rem;
        height: 1rem;
        border: 3px solid currentColor;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        animation: spin 0.85s linear infinite;
      }
      .large .spinner {
        width: 1.75rem;
        height: 1.75rem;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoaderComponent {
  @Input() label?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
