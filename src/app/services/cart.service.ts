import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';

@Injectable({ providedIn: 'root' })
export class CartService {
  private key = 'mr_cart';
  private items: CartItem[] = this.leer();

  private leer(): CartItem[] {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : [];
  }

  private guardar() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  getCount(): number {
    return this.items.reduce((acc, it) => acc + it.cantidad, 0);
  }

  add(item: CartItem) {
    const i = this.items.findIndex(x => x.id === item.id);
    if (i >= 0) {
      this.items[i].cantidad += item.cantidad;
    } else {
      this.items.push(item);
    }
    this.guardar();
  }

  remove(id: string) {
    this.items = this.items.filter(x => x.id !== id);
    this.guardar();
  }

  clear() {
    this.items = [];
    this.guardar();
  }

  // Cálculos de factura
  getSubtotal(): number {
    return this.items.reduce((acc, x) => acc + x.precio * x.cantidad, 0);
  }

  getIVA(tasa = 0.12): number {
    return +(this.getSubtotal() * tasa).toFixed(2);
  }

  getTotal(tasa = 0.12): number {
    return +(this.getSubtotal() + this.getIVA(tasa)).toFixed(2);
  }
}
