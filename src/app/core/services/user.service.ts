import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers(): Observable<User[]> {
    return of([]);
  }

  getUserById(id: string): Observable<User | null> {
    console.log('fetch user', id);
    return of(null);
  }

  saveUser(user: User): Observable<User> {
    console.log('save user', user);
    return of(user);
  }
}
