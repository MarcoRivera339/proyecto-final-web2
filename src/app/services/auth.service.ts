import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Simplesito: guardamos login en localStorage
  private key = 'mr_is_logged_in';

  isLoggedIn(): boolean {
    return localStorage.getItem(this.key) === 'true';
  }

  login() {
    localStorage.setItem(this.key, 'true');
  }

  logout() {
    localStorage.setItem(this.key, 'false');
  }
}
