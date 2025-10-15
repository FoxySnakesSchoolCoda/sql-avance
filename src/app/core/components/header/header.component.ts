import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() isHandset = false;
  @Output() readonly menuToggle = new EventEmitter<void>();

  private readonly themeService = inject(ThemeService);
  readonly theme$ = this.themeService.theme$;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onToggleMenu(): void {
    this.menuToggle.emit();
  }
}
