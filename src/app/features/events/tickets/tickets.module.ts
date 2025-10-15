import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketsRoutingModule } from './tickets-routing.module';

@NgModule({
  declarations: [TicketListComponent, TicketDetailComponent, TicketFormComponent],
  imports: [CommonModule, SharedModule, TicketsRoutingModule],
})
export class TicketsModule {}
