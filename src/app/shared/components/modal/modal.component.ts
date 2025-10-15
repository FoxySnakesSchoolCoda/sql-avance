import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-modal',
  template: `
    <div class="backdrop" *ngIf="open" (click)="close.emit()"></div>
    <section class="modal" *ngIf="open">
      <header class="modal__header">
        <h2>{{ title }}</h2>
        <button type="button" (click)="close.emit()">×</button>
      </header>
      <div class="modal__content">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: [
    `
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
      }
      .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 0.75rem;
        width: min(90vw, 540px);
        max-height: 90vh;
        overflow: auto;
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
      }
      .modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid #e5e7eb;
      }
      .modal__content {
        padding: 1.5rem;
      }
      button {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
      }
    `,
  ],
})
export class ModalComponent {
  @Input() open = false;
  @Input() title = '';
  @Output() close = new EventEmitter<void>();
}
