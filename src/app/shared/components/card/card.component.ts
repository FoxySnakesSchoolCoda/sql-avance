import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-card',
  template: `
    <article class="card" [ngClass]="variant">
      <header *ngIf="title" class="card__header">
        <h3>{{ title }}</h3>
      </header>
      <div class="card__body">
        <ng-content></ng-content>
      </div>
    </article>
  `,
  styles: [
    `
      .card {
        border-radius: 1rem;
        border: 1px solid #e5e7eb;
        background: #fff;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        padding: 1.5rem;
      }
      .card__header {
        margin-bottom: 1rem;
      }
      .card__body {
        display: block;
      }
      .highlight {
        border-color: #3b5998;
      }
    `,
  ],
})
export class CardComponent {
  @Input() title?: string;
  @Input() variant: 'default' | 'highlight' = 'default';
}
