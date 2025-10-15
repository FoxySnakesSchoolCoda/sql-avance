import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { map, shareReplay } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-main-layout',
  template: `
    <div class="main-layout">
      <app-header (menuToggle)="drawer?.toggle()"></app-header>

      <mat-drawer-container
        class="layout-container"
        [hasBackdrop]="(isHandset$ | async) ?? false"
      >
        <mat-drawer
          #drawer
          class="layout-sidebar"
          [mode]="(isHandset$ | async) ? 'over' : 'side'"
          [opened]="!(isHandset$ | async)"
          (click)="closeDrawerIfHandset()"
        >
          <app-sidebar></app-sidebar>
        </mat-drawer>

        <mat-drawer-content>
          <div class="content-wrapper">
            <main class="layout-content">
              <router-outlet></router-outlet>
            </main>
            <app-footer></app-footer>
          </div>
        </mat-drawer-content>
      </mat-drawer-container>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: var(--lb-background);
      }

      .main-layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: linear-gradient(180deg, color-mix(in srgb, var(--lb-background) 98%, transparent 2%), var(--lb-background));
      }

      app-header {
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      .layout-container {
        flex: 1;
        display: flex;
        background: transparent;
      }

      .layout-sidebar {
        width: 300px;
        border-right: 1px solid color-mix(in srgb, var(--lb-border) 70%, transparent 30%);
        background-color: color-mix(in srgb, var(--lb-background) 85%, var(--lb-surface) 15%);
      }

      .layout-sidebar app-sidebar {
        display: block;
        height: 100%;
      }

      .content-wrapper {
        min-height: calc(100vh - 72px);
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background: var(--lb-background);
        padding: 1.75rem clamp(1rem, 4vw, 3rem);
      }

      .layout-content {
        flex: 1;
        background: var(--lb-surface-variant);
        border-radius: 18px;
        padding: clamp(1rem, 2vw, 2rem);
        box-shadow: var(--lb-shadow);
        border: 1px solid color-mix(in srgb, var(--lb-border) 75%, transparent 25%);
        transition: background-color 200ms ease, box-shadow 200ms ease;
      }

      @media (max-width: 960px) {
        .layout-sidebar {
          width: min(320px, 80vw);
          border-right: none;
          background-color: color-mix(in srgb, var(--lb-background) 70%, var(--lb-surface) 30%);
        }

        .content-wrapper {
          padding: 1.25rem clamp(0.75rem, 4vw, 1.5rem);
        }

        .layout-content {
          border-radius: 16px;
        }
      }
    `,
  ],
})
export class MainLayoutComponent {
  @ViewChild('drawer') drawer?: MatDrawer;

  private readonly breakpointObserver = inject(BreakpointObserver);

  readonly isHandset$ = this.breakpointObserver
    .observe([Breakpoints.Handset, '(max-width: 959px)'])
    .pipe(
      map((result: BreakpointState) => result.matches),
      shareReplay({ bufferSize: 1, refCount: true })
    );

  closeDrawerIfHandset(): void {
    if (!this.drawer) {
      return;
    }

    if (this.drawer.mode === 'over' && this.drawer.opened) {
      this.drawer.close();
    }
  }
}
