import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupFormComponent } from './components/group-form/group-form.component';
import { GroupMembersComponent } from './components/group-members/group-members.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { GroupSettingsComponent } from './components/group-settings/group-settings.component';

@NgModule({
  declarations: [
    GroupListComponent,
    GroupDetailComponent,
    GroupFormComponent,
    GroupMembersComponent,
    GroupChatComponent,
    GroupSettingsComponent,
  ],
  imports: [CommonModule, SharedModule, GroupsRoutingModule],
})
export class GroupsModule {}
