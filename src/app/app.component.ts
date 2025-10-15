import { Component, inject } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);
}
