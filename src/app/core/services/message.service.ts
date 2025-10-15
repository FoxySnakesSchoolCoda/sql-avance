import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({ providedIn: 'root' })
export class MessageService {
  getThreads(): Observable<Message[]> {
    return of([]);
  }

  getMessage(id: string): Observable<Message | null> {
    console.log('fetch message', id);
    return of(null);
  }

  sendMessage(message: Message): Observable<Message> {
    console.log('send message', message);
    return of(message);
  }
}
