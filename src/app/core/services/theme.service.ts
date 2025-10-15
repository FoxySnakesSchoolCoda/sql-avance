import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'lovebook-theme';
  private readonly themeSubject = new BehaviorSubject<ThemeMode>('light');

  readonly theme$ = this.themeSubject.asObservable();

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    const savedTheme = this.getSavedTheme();
    this.applyTheme(savedTheme, false);
  }

  toggleTheme(): void {
    const nextTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.applyTheme(nextTheme);
  }

  setTheme(mode: ThemeMode): void {
    this.applyTheme(mode);
  }

  private applyTheme(mode: ThemeMode, persist = true): void {
    this.themeSubject.next(mode);

    const classList = this.document.body.classList;
    classList.remove('lovebook-light-theme', 'lovebook-dark-theme');
    classList.add(`lovebook-${mode}-theme`);

    if (persist && typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, mode);
    }
  }

  private getSavedTheme(): ThemeMode {
    if (typeof localStorage === 'undefined') {
      return 'light';
    }
    const stored = localStorage.getItem(this.storageKey) as ThemeMode | null;
    return stored === 'dark' ? 'dark' : 'light';
  }
}
