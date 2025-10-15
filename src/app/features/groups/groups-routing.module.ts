import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupFormComponent } from './components/group-form/group-form.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupSettingsComponent } from './components/group-settings/group-settings.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { GroupMembersComponent } from './components/group-members/group-members.component';

const routes: Routes = [
  { path: '', component: GroupListComponent },
  { path: 'create', component: GroupFormComponent },
  {
    path: ':id',
    children: [
      { path: '', component: GroupDetailComponent },
      { path: 'settings', component: GroupSettingsComponent },
      { path: 'chat', component: GroupChatComponent },
      { path: 'members', component: GroupMembersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule {}
