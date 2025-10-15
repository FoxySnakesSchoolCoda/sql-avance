import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  readonly theme$ = this.themeService.theme$;

  constructor(private readonly themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onToggleMenu(): void {
    this.menuToggle.emit();
  }
}
