import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FacturasService {
  private API = 'http://localhost:3000/facturas';

  constructor(private http: HttpClient) {}

  async crear(items: any[], subtotal: number, iva: number, total: number) {
    const payload = { fecha: new Date().toISOString(), items, subtotal, iva, total };

    const res = await firstValueFrom(this.http.post<any>(this.API, payload));
    return res; 
  }

  getAll() {
    return this.http.get<any[]>(this.API);
  }
}
