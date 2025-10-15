import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Group } from '../models/group.model';

@Injectable({ providedIn: 'root' })
export class GroupService {
  getGroups(): Observable<Group[]> {
    return of([]);
  }

  getGroup(id: string): Observable<Group | null> {
    console.log('fetch group', id);
    return of(null);
  }

  saveGroup(group: Group): Observable<Group> {
    console.log('save group', group);
    return of(group);
  }
}
