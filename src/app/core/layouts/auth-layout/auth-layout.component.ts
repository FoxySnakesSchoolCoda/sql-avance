import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-auth-layout',
  template: `
    <div class="auth-layout">
      <main class="auth-card">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      .auth-layout {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #3b5998, #8b9dc3);
        padding: 2rem;
      }
      .auth-card {
        width: 100%;
        max-width: 480px;
        background: #fff;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class AuthLayoutComponent {}
