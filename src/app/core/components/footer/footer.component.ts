import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-footer',
  template: `
    <footer class="app-footer">
      <div class="footer-content">
        <small>© {{ currentYear }} LoveBook</small>
        <nav class="footer-links">
          <a href="#" rel="noopener">Conditions d'utilisation</a>
          <a href="#" rel="noopener">Confidentialité</a>
          <a href="#" rel="noopener">Support</a>
        </nav>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .app-footer {
        backdrop-filter: blur(20px);
        background: color-mix(in srgb, var(--lb-overlay) 80%, transparent 20%);
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: center;
        border-top: 1px solid color-mix(in srgb, var(--lb-border) 70%, transparent 30%);
      }

      .footer-content {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        align-items: center;
        color: var(--lb-text-secondary);
        font-size: 0.85rem;
      }

      .footer-links {
        display: flex;
        gap: 1.5rem;
      }

      .footer-links a {
        color: inherit;
        text-decoration: none;
        transition: color 150ms ease;
      }

      .footer-links a:hover {
        color: var(--lb-primary);
      }

      @media (max-width: 600px) {
        .footer-content {
          flex-direction: column;
          text-align: center;
          gap: 1rem;
        }

        .footer-links {
          flex-direction: column;
          gap: 0.75rem;
        }
      }
    `,
  ],
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
