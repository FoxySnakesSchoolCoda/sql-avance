import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
import { MessageFormComponent } from './components/message-form/message-form.component';

const routes: Routes = [
  { path: '', component: MessageListComponent },
  { path: 'create', component: MessageFormComponent },
  { path: ':id', component: MessageDetailComponent },
  { path: ':id/reply', component: MessageFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
