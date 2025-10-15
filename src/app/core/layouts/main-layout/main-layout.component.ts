import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, shareReplay } from 'rxjs';

const HANDSET_QUERY = '(max-width: 959px)';

@Component({
  standalone: false,
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);

  private readonly handset$ = this.breakpointObserver
    .observe(HANDSET_QUERY)
    .pipe(
      map((result) => result.matches),
      shareReplay({ bufferSize: 1, refCount: true })
    );

  readonly isHandset = toSignal(this.handset$, {
    initialValue: this.breakpointObserver.isMatched(HANDSET_QUERY),
  });

  readonly drawerOpened = signal(!this.breakpointObserver.isMatched(HANDSET_QUERY));

  private readonly _syncDrawerState = effect(() => {
    if (this.isHandset()) {
      this.drawerOpened.set(false);
    } else {
      this.drawerOpened.set(true);
    }
  });

  onToggleMenu(): void {
    if (this.isHandset()) {
      this.drawerOpened.update((opened) => !opened);
    }
  }

  onSidebarNavigate(): void {
    if (this.isHandset()) {
      this.drawerOpened.set(false);
    }
  }
}
