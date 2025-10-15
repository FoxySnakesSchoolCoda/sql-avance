import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { PollListComponent } from './components/poll-list/poll-list.component';
import { PollDetailComponent } from './components/poll-detail/poll-detail.component';
import { PollFormComponent } from './components/poll-form/poll-form.component';
import { PollsRoutingModule } from './polls-routing.module';

@NgModule({
  declarations: [PollListComponent, PollDetailComponent, PollFormComponent],
  imports: [CommonModule, SharedModule, PollsRoutingModule],
})
export class PollsModule {}
