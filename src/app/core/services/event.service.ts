import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  getEvents(): Observable<Event[]> {
    return of([]);
  }

  getEvent(id: string): Observable<Event | null> {
    console.log('fetch event', id);
    return of(null);
  }

  saveEvent(event: Event): Observable<Event> {
    console.log('save event', event);
    return of(event);
  }
}
