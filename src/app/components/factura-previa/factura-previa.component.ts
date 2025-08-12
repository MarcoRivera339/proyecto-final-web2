import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { FacturasService } from '../../services/factura.service';

@Component({
  selector: 'app-factura-previa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './factura-previa.component.html',
  styleUrls: ['./factura-previa.component.css']
})
export class FacturaPreviaComponent {
  tasaIVA = 0.15;

  constructor(public cart: CartService, private facturas: FacturasService) {}

  async generarFactura() {
    const items = this.cart.getItems();
    if (!items.length) return;

    const subtotal = this.cart.getSubtotal();
    const iva = this.cart.getIVA(this.tasaIVA);
    const total = this.cart.getTotal(this.tasaIVA);

    const factura = await this.facturas.crear(items, subtotal, iva, total);
    this.cart.clear();
    alert('Factura generada: ' + factura.id);
  }
}
