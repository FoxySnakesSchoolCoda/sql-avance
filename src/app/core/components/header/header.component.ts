import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header',
  template: `
    <header class="app-header">
      <h1 class="app-title">LoveBook</h1>
    </header>
  `,
  styles: [
    `
      .app-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background-color: #3b5998;
        color: #fff;
      }
      .app-title {
        margin: 0;
        font-size: 1.5rem;
      }
    `,
  ],
})
export class HeaderComponent {}
