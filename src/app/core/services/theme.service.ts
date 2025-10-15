import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'lovebook-preferred-theme';
  private readonly themeSubject = new BehaviorSubject<ThemeMode>(
    this.getInitialTheme()
  );

  readonly theme$ = this.themeSubject.asObservable();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {
    this.applyTheme(this.themeSubject.value);
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode =
      this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(nextTheme);
  }

  setTheme(theme: ThemeMode): void {
    if (this.themeSubject.value === theme) {
      return;
    }
    this.themeSubject.next(theme);
    this.applyTheme(theme);
  }

  private getInitialTheme(): ThemeMode {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.storageKey) as ThemeMode | null;
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  }

  private applyTheme(theme: ThemeMode): void {
    const classList = this.document.documentElement.classList;
    classList.remove('theme-light', 'theme-dark');
    classList.add(`theme-${theme}`);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, theme);
    }
  }
}
