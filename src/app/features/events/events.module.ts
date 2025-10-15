import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventChatComponent } from './components/event-chat/event-chat.component';
import { EventSettingsComponent } from './components/event-settings/event-settings.component';
import { EventStatisticsComponent } from './components/event-statistics/event-statistics.component';
import { EventParticipantsComponent } from './components/event-participants/event-participants.component';

@NgModule({
  declarations: [
    EventListComponent,
    EventDetailComponent,
    EventFormComponent,
    EventChatComponent,
    EventSettingsComponent,
    EventStatisticsComponent,
    EventParticipantsComponent,
  ],
  imports: [CommonModule, SharedModule, EventsRoutingModule],
})
export class EventsModule {}
