import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-footer',
  template: `
    <footer class="app-footer">
      <small>© {{ currentYear }} LoveBook. All rights reserved.</small>
    </footer>
  `,
  styles: [
    `
      .app-footer {
        padding: 1rem;
        text-align: center;
        background-color: #eef1f5;
      }
    `,
  ],
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
