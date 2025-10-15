import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-sidebar',
  template: `
    <nav class="sidebar">
      <ul>
        <li><a routerLink="/users">Users</a></li>
        <li><a routerLink="/groups">Groups</a></li>
        <li><a routerLink="/events">Events</a></li>
        <li><a routerLink="/messages">Messages</a></li>
        <li><a routerLink="/albums">Albums</a></li>
        <li><a routerLink="/admin">Admin</a></li>
      </ul>
    </nav>
  `,
  styles: [
    `
      .sidebar {
        width: 240px;
        padding: 1rem;
        background-color: #f4f5f7;
        height: 100%;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      a {
        color: #3b5998;
        text-decoration: none;
      }
      li + li {
        margin-top: 0.5rem;
      }
    `,
  ],
})
export class SidebarComponent {}
