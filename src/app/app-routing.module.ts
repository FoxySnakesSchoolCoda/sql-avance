import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      {
        path: 'users',
        loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'groups',
        loadChildren: () => import('./features/groups/groups.module').then((m) => m.GroupsModule),
      },
      {
        path: 'events',
        loadChildren: () => import('./features/events/events.module').then((m) => m.EventsModule),
      },
      {
        path: 'messages',
        loadChildren: () => import('./features/messages/messages.module').then((m) => m.MessagesModule),
      },
      {
        path: 'albums',
        loadChildren: () => import('./features/albums/albums.module').then((m) => m.AlbumsModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: '',
        loadChildren: () => import('./features/static/static.module').then((m) => m.StaticModule),
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  { path: '**', redirectTo: 'events' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
