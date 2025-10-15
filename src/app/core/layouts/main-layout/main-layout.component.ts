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
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
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
