import { Injectable } from '@angular/core';

interface Usuario {
  email: string;
  password: string;
  nombre?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private key = 'mr_is_logged_in';
  private usersKey = 'users';

  isLoggedIn(): boolean {
    return localStorage.getItem(this.key) === 'true';
  }

  login(): void {
    localStorage.setItem(this.key, 'true');
  }

  logout(): void {
    localStorage.setItem(this.key, 'false');
  }

  private getUsers(): Usuario[] {
    const raw = localStorage.getItem(this.usersKey);
    return raw ? (JSON.parse(raw) as Usuario[]) : [];
  }

  private saveUsers(users: Usuario[]): void {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  userExists(email: string): boolean {
    const users = this.getUsers();
    return users.some(u => u.email.trim().toLowerCase() === email.trim().toLowerCase());
  }

  createUser(user: Usuario): void {
    const users = this.getUsers();
    if (this.userExists(user.email)) throw new Error('El correo ya está registrado');
    users.push(user);
    this.saveUsers(users);
  }

  loginWith(email: string, password: string): boolean {
    const users = this.getUsers();
    const ok = users.some(
      u => u.email.trim().toLowerCase() === email.trim().toLowerCase() && u.password === password
    );
    if (ok) this.login();
    return ok;
  }
}
