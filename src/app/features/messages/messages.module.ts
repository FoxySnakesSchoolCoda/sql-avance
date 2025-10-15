import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
import { MessageFormComponent } from './components/message-form/message-form.component';

@NgModule({
  declarations: [MessageListComponent, MessageDetailComponent, MessageFormComponent],
  imports: [CommonModule, SharedModule, MessagesRoutingModule],
})
export class MessagesModule {}
