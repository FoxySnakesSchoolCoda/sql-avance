import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(username: string, password: string): void {
    console.log('login', username, password);
  }

  register(data: unknown): void {
    console.log('register', data);
  }

  logout(): void {
    console.log('logout');
  }
}
