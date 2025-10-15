import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminService {
  synchronize(): void {
    console.log('admin sync');
  }
}
