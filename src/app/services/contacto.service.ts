import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface MensajeContacto {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class ContactoService {
  private API = 'http://localhost:3000/mensajes';
  private key = 'mr_msgs';

  constructor(private http: HttpClient) {}

  async enviar(data: MensajeContacto) {
    const payload = { ...data, fecha: new Date().toISOString() };
    try {
      return await firstValueFrom(this.http.post(this.API, payload));
    } catch (e) {
    
      const err = e as HttpErrorResponse;
      if (err.status === 0 || err.status === 404) {
        const raw = localStorage.getItem(this.key);
        const arr = raw ? JSON.parse(raw) : [];
        arr.push({ id: Date.now(), ...payload, local: true });
        localStorage.setItem(this.key, JSON.stringify(arr));
        return { local: true };
      }
      throw e;
    }
  }
}
