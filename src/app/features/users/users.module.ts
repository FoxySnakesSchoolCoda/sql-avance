import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { UserTicketsComponent } from './components/user-tickets/user-tickets.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    UserAlbumsComponent,
    UserEventsComponent,
    UserGroupsComponent,
    UserTicketsComponent,
  ],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
})
export class UsersModule {}
