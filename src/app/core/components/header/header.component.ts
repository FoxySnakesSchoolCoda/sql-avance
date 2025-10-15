import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  standalone: false,
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary" class="app-header" [class.is-scrolled]="isScrolled">
      <div class="brand">
        <button
          mat-icon-button
          class="menu-button"
          type="button"
          aria-label="Ouvrir la navigation"
          (click)="menuToggle.emit()"
        >
          <mat-icon>menu</mat-icon>
        </button>
        <div class="logo">
          <div class="logo-icon">
            <mat-icon>favorite</mat-icon>
          </div>
          <span class="logo-text">LoveBook</span>
        </div>
      </div>

      <div class="search">
        <mat-form-field appearance="outline">
          <mat-icon matPrefix>search</mat-icon>
          <input matInput type="search" placeholder="Rechercher sur LoveBook" />
        </mat-form-field>
      </div>

      <div class="actions">
        <button
          mat-icon-button
          matBadge="3"
          matBadgeColor="warn"
          matBadgeOverlap="false"
          matTooltip="Notifications"
          aria-label="Notifications"
        >
          <mat-icon>notifications</mat-icon>
        </button>
        <button
          mat-icon-button
          matBadge="5"
          matBadgeColor="accent"
          matBadgeOverlap="false"
          matTooltip="Messages"
          aria-label="Messages"
        >
          <mat-icon>chat_bubble</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Profil" aria-label="Profil">
          <mat-icon>account_circle</mat-icon>
        </button>
        <button
          mat-icon-button
          class="theme-toggle"
          [attr.aria-label]="(theme$ | async) === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'"
          matTooltip="Mode clair / sombre"
          type="button"
          (click)="onToggleTheme()"
        >
          <mat-icon *ngIf="(theme$ | async) === 'dark'; else darkIcon">light_mode</mat-icon>
          <ng-template #darkIcon>
            <mat-icon>dark_mode</mat-icon>
          </ng-template>
        </button>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      .app-header {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 1.5rem;
        padding: 0.5rem 1.5rem;
        background: color-mix(in srgb, var(--lb-overlay) 90%, var(--lb-primary) 10%);
        backdrop-filter: saturate(180%) blur(22px);
        box-shadow: none;
        transition: box-shadow 200ms ease, background-color 200ms ease;
      }

      .app-header.is-scrolled {
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
        background: color-mix(in srgb, var(--lb-overlay) 85%, var(--lb-primary) 15%);
      }

      .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .menu-button {
        display: none;
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        color: var(--lb-text-primary);
      }

      .logo-icon {
        width: 38px;
        height: 38px;
        border-radius: 12px;
        background: linear-gradient(145deg, var(--lb-primary), var(--lb-primary-strong));
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.2);
      }

      .logo-text {
        font-weight: 700;
        font-size: 1.4rem;
        letter-spacing: 0.01em;
      }

      .search {
        display: flex;
        justify-content: center;
      }

      .search mat-form-field {
        width: min(480px, 100%);
        background-color: color-mix(in srgb, var(--lb-surface) 90%, transparent 10%);
        border-radius: 999px;
      }

      .search .mat-mdc-text-field-wrapper {
        border-radius: 999px;
        background-color: transparent;
      }

      .search input {
        font-size: 0.95rem;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .actions button {
        position: relative;
        color: var(--lb-text-primary);
        transition: background-color 150ms ease, transform 150ms ease;
      }

      .actions button:hover {
        background-color: color-mix(in srgb, var(--lb-primary) 20%, transparent 80%);
        transform: translateY(-1px);
      }

      .theme-toggle {
        color: var(--lb-primary);
      }

      @media (max-width: 960px) {
        .app-header {
          grid-template-columns: auto 1fr;
          grid-template-areas:
            'brand actions'
            'search search';
        }

        .brand {
          grid-area: brand;
        }

        .search {
          grid-area: search;
          width: 100%;
        }

        .actions {
          grid-area: actions;
          justify-content: flex-end;
        }

        .menu-button {
          display: inline-flex;
        }
      }

      @media (max-width: 600px) {
        .search mat-form-field {
          width: 100%;
        }

        .actions button span[matBadge] {
          display: none;
        }
      }
    `,
  ],
})
export class HeaderComponent implements OnDestroy {
  @Output() readonly menuToggle = new EventEmitter<void>();

  readonly theme$ = this.themeService.theme$;
  isScrolled = false;

  constructor(private readonly themeService: ThemeService) {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.updateScrollState, { passive: true });
      this.updateScrollState();
    }
  }

  onToggleTheme(): void {
    this.themeService.toggleTheme();
  }

  private updateScrollState = () => {
    this.isScrolled = (typeof window !== 'undefined' ? window.scrollY : 0) > 8;
  };

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.updateScrollState);
    }
  }
}
