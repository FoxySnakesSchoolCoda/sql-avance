import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventChatComponent } from './components/event-chat/event-chat.component';
import { EventSettingsComponent } from './components/event-settings/event-settings.component';
import { EventStatisticsComponent } from './components/event-statistics/event-statistics.component';
import { EventParticipantsComponent } from './components/event-participants/event-participants.component';

const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'create', component: EventFormComponent },
  {
    path: ':id',
    children: [
      { path: '', component: EventDetailComponent },
      { path: 'settings', component: EventSettingsComponent },
      { path: 'chat', component: EventChatComponent },
      { path: 'statistics', component: EventStatisticsComponent },
      { path: 'participants', component: EventParticipantsComponent },
      {
        path: 'polls',
        loadChildren: () => import('./polls/polls.module').then((m) => m.PollsModule),
      },
      {
        path: 'tickets',
        loadChildren: () => import('./tickets/tickets.module').then((m) => m.TicketsModule),
      },
      {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then((m) => m.GalleryModule),
      },
      {
        path: 'shopping-list',
        loadChildren: () =>
          import('./shopping-list/shopping-list.module').then((m) => m.ShoppingListModule),
      },
      {
        path: 'carpool',
        loadChildren: () => import('./carpool/carpool.module').then((m) => m.CarpoolModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
