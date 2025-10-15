import { Component, EventEmitter, Output } from '@angular/core';

interface SidebarLink {
  label: string;
  icon: string;
  route: string;
}

@Component({
  standalone: false,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() readonly linkSelected = new EventEmitter<void>();

  readonly links: SidebarLink[] = [
    { label: 'Accueil', icon: 'home', route: '/' },
    { label: 'Groupes', icon: 'groups', route: '/groups' },
    { label: 'Événements', icon: 'event', route: '/events' },
    { label: 'Messages', icon: 'chat_bubble', route: '/messages' },
    { label: 'Albums', icon: 'photo_library', route: '/albums' },
    { label: 'Billetterie', icon: 'confirmation_number', route: '/tickets' },
    { label: 'Administration', icon: 'admin_panel_settings', route: '/admin' },
  ];

  onNavigate(): void {
    this.linkSelected.emit();
  }

  trackByRoute(_: number, link: SidebarLink): string {
    return link.route;
  }
}
