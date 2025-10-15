import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poll } from '../models/poll.model';

@Injectable({ providedIn: 'root' })
export class PollService {
  getPolls(eventId: string): Observable<Poll[]> {
    console.log('fetch polls for event', eventId);
    return of([]);
  }

  savePoll(poll: Poll): Observable<Poll> {
    console.log('save poll', poll);
    return of(poll);
  }
}
