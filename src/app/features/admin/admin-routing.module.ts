import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminGroupsComponent } from './components/admin-groups/admin-groups.component';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';
import { AdminConfigComponent } from './components/admin-config/admin-config.component';

const routes: Routes = [
  { path: '', component: AdminConfigComponent },
  { path: 'users', component: AdminUsersComponent },
  { path: 'groups', component: AdminGroupsComponent },
  { path: 'events', component: AdminEventsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
