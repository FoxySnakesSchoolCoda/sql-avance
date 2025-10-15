import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-main-layout',
  template: `
    <div class="layout">
      <app-header></app-header>
      <div class="layout-body">
        <app-sidebar></app-sidebar>
        <main class="layout-content">
          <router-outlet></router-outlet>
        </main>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      .layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .layout-body {
        flex: 1;
        display: flex;
      }
      .layout-content {
        flex: 1;
        padding: 1.5rem;
        background-color: #f9fafc;
      }
    `,
  ],
})
export class MainLayoutComponent {}
