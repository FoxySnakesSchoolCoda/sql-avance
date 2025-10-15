import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketService {
  getTicketsByEvent(eventId: string): Observable<Ticket[]> {
    console.log('fetch tickets for event', eventId);
    return of([]);
  }

  saveTicket(ticket: Ticket): Observable<Ticket> {
    console.log('save ticket', ticket);
    return of(ticket);
  }
}
