import { Injectable } from '@angular/core';
import { Factura } from '../interfaces/factura';
import { CartItem } from '../interfaces/cart-item';

@Injectable({ providedIn: 'root' })
export class FacturasService {
  private readonly key = 'mr_invoices';

  private leer(): Factura[] {
    const raw = localStorage.getItem(this.key);
    try { return raw ? (JSON.parse(raw) as Factura[]) : []; } catch { return []; }
  }

  private guardar(list: Factura[]): void {
    localStorage.setItem(this.key, JSON.stringify(list));
  }

  getAll(): Factura[] {
    return this.leer();
  }

  crear(items: CartItem[], subtotal: number, iva: number, total: number): Factura {
    const factura: Factura = {
      id: Date.now().toString(),
      fecha: new Date().toISOString(),
      items: items.map(i => ({ ...i })),
      subtotal,
      iva,
      total
    };
    const list = this.leer();
    list.push(factura);
    this.guardar(list);
    return factura;
  }
}
