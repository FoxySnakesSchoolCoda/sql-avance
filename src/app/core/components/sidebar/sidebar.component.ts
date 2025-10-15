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
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
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
