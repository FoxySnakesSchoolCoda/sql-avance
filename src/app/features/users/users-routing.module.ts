import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { UserTicketsComponent } from './components/user-tickets/user-tickets.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  {
    path: ':id',
    children: [
      { path: '', component: UserDetailComponent },
      { path: 'edit', component: UserFormComponent },
      { path: 'albums', component: UserAlbumsComponent },
      { path: 'events', component: UserEventsComponent },
      { path: 'groups', component: UserGroupsComponent },
      { path: 'tickets', component: UserTicketsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
