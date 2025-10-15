import { Component } from '@angular/core';

interface SidebarItem {
  label: string;
  icon: string;
  link: string;
  exact?: boolean;
}

@Component({
  standalone: false,
  selector: 'app-sidebar',
  template: `
    <aside class="sidebar">
      <div class="sidebar-inner">
        <mat-nav-list>
          <a
            mat-list-item
            *ngFor="let item of items"
            [routerLink]="item.link"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: item.exact ?? false }"
          >
            <span class="active-indicator" aria-hidden="true"></span>
            <mat-icon matListIcon>{{ item.icon }}</mat-icon>
            <span class="label">{{ item.label }}</span>
          </a>
        </mat-nav-list>
      </div>
    </aside>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }

      .sidebar {
        width: 280px;
        height: 100%;
        padding: 1.5rem 0.75rem;
        background: transparent;
      }

      .sidebar-inner {
        height: 100%;
        padding: 1rem;
        border-radius: 16px;
        background-color: color-mix(in srgb, var(--lb-surface) 92%, transparent 8%);
        box-shadow: var(--lb-shadow);
        border: 1px solid color-mix(in srgb, var(--lb-border) 70%, transparent 30%);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .mat-mdc-list-base {
        padding-top: 0;
      }

      a.mat-mdc-list-item {
        position: relative;
        border-radius: 12px;
        margin-bottom: 0.3rem;
        transition: background-color 180ms ease, transform 180ms ease;
        color: var(--lb-text-secondary);
      }

      a.mat-mdc-list-item:hover {
        background-color: color-mix(in srgb, var(--lb-primary) 15%, transparent 85%);
        color: var(--lb-text-primary);
        transform: translateX(2px);
      }

      a.mat-mdc-list-item .mdc-list-item__content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .label {
        font-weight: 500;
      }

      .active-indicator {
        position: absolute;
        left: 0;
        top: 50%;
        width: 4px;
        height: 60%;
        border-radius: 999px;
        background: linear-gradient(180deg, var(--lb-primary), var(--lb-primary-strong));
        transform: translate(-10px, -50%);
        opacity: 0;
        transition: transform 180ms ease, opacity 180ms ease;
      }

      a.mat-mdc-list-item.is-active,
      a.mat-mdc-list-item.is-active:hover {
        background-color: color-mix(in srgb, var(--lb-primary) 18%, transparent 82%);
        color: var(--lb-text-primary);
      }

      a.mat-mdc-list-item.is-active .active-indicator {
        transform: translate(-6px, -50%);
        opacity: 1;
      }

      @media (max-width: 960px) {
        .sidebar {
          width: min(320px, 80vw);
          padding: 1rem 0.5rem;
        }

        .sidebar-inner {
          box-shadow: none;
          border: none;
          background-color: transparent;
        }
      }
    `,
  ],
})
export class SidebarComponent {
  readonly items: SidebarItem[] = [
    { label: 'Accueil', icon: 'home', link: '/home', exact: true },
    { label: 'Groupes', icon: 'group', link: '/groups' },
    { label: 'Événements', icon: 'event', link: '/events' },
    { label: 'Messages', icon: 'chat', link: '/messages' },
    { label: 'Albums', icon: 'photo_library', link: '/albums' },
    { label: 'Billetterie', icon: 'confirmation_number', link: '/tickets' },
    { label: 'Administration', icon: 'admin_panel_settings', link: '/admin' },
  ];
}
