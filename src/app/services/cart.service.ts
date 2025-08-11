import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly key = 'mr_cart';
  private items: CartItem[] = this.leer();

  private leer(): CartItem[] {
    const raw = localStorage.getItem(this.key);
    try {
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  }

  private guardar(): void {
    localStorage.setItem(this.key, JSON.stringify(this.items));
  }

  getItems(): CartItem[] {
    return this.items.map(i => ({ ...i }));
  }

  getCount(): number {
    return this.items.reduce((acc, it) => acc + it.cantidad, 0);
  }

  add(item: CartItem): void {
    const i = this.items.findIndex(x => x.id === item.id);
    if (i >= 0) {
      this.items[i].cantidad += item.cantidad;
    } else {
      this.items.push({ ...item });
    }
    this.guardar();
  }

  remove(id: string): void {
    this.items = this.items.filter(x => x.id !== id);
    this.guardar();
  }

  clear(): void {
    this.items = [];
    this.guardar();
  }

  getSubtotal(): number {
    const subtotal = this.items.reduce((acc, x) => acc + Number(x.precio) * Number(x.cantidad), 0);
    return +subtotal.toFixed(2);
  }

  getIVA(tasa = 0.12): number {
    return +(this.getSubtotal() * tasa).toFixed(2);
  }

  getTotal(tasa = 0.12): number {
    return +(this.getSubtotal() + this.getIVA(tasa)).toFixed(2);
  }
}
