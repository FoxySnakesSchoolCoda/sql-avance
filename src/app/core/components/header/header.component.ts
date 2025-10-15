import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

type ThemeMode = 'light' | 'dark';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() readonly menuToggle = new EventEmitter<void>();

  theme$!: Observable<ThemeMode>;
  isScrolled = false;

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;

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
