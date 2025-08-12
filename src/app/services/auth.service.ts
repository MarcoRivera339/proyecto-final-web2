import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface Usuario {
  email: string;
  password: string;
  nombre?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private key = 'mr_is_logged_in';
  private usersKey = 'users';
  private API_USERS = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean { return localStorage.getItem(this.key) === 'true'; }
  login(): void { localStorage.setItem(this.key, 'true'); }
  logout(): void { localStorage.setItem(this.key, 'false'); }


  private getUsers(): Usuario[] {
    const raw = localStorage.getItem(this.usersKey);
    try { return raw ? (JSON.parse(raw) as Usuario[]) : []; } catch { return []; }
  }
  private saveUsers(users: Usuario[]): void { localStorage.setItem(this.usersKey, JSON.stringify(users)); }
  userExists(email: string): boolean {
    const users = this.getUsers();
    return users.some(u => u.email.trim().toLowerCase() === email.trim().toLowerCase());
  }
  createUser(user: Usuario): void {
    const users = this.getUsers();
    if (this.userExists(user.email)) throw new Error('El correo ya está registrado (local)');
    users.push(user);
    this.saveUsers(users);
  }
  loginWith(email: string, password: string): boolean {
    const users = this.getUsers();
    const ok = users.some(u => u.email.trim().toLowerCase() === email.trim().toLowerCase() && u.password === password);
    if (ok) this.login();
    return ok;
  }
  async createUserApi(user: Usuario): Promise<void> {
    try {
      const exists = await firstValueFrom(
        this.http.get<Usuario[]>(`${this.API_USERS}?email=${encodeURIComponent(user.email)}`)
      );
      if (exists.length) throw new Error('El correo ya está registrado');

      await firstValueFrom(this.http.post(this.API_USERS, user));
    } catch (e: any) {
      const err = e as HttpErrorResponse;
      if (err?.status === 404) {
        throw new Error('Revisa tu db.json: falta la colección "users" en la raíz.');
      }
      if (err?.status === 0) {
        throw new Error('No se pudo conectar a http://localhost:3000 (¿json-server encendido? ¿ruta correcta?).');
      }
      throw e;
    }
  }

  async loginWithApi(email: string, password: string): Promise<boolean> {
    try {
      const res = await firstValueFrom(
        this.http.get<Usuario[]>(
          `${this.API_USERS}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        )
      );
      const ok = !!res.length;
      if (ok) this.login();
      return ok;
    } catch (e: any) {
      const err = e as HttpErrorResponse;
      if (err?.status === 0) {
        return false;
      }
      throw e;
    }
  }
}
