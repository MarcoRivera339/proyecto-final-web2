import { CartItem } from './cart-item';

export interface Factura {
  id: string;
  fecha: string;
  items: CartItem[];
  subtotal: number;
  iva: number;
  total: number;
}
