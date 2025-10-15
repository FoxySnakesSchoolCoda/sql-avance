import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminGroupsComponent } from './components/admin-groups/admin-groups.component';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';
import { AdminConfigComponent } from './components/admin-config/admin-config.component';

@NgModule({
  declarations: [
    AdminUsersComponent,
    AdminGroupsComponent,
    AdminEventsComponent,
    AdminConfigComponent,
  ],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
})
export class AdminModule {}
