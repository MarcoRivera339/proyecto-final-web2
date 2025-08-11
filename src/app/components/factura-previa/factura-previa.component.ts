import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-factura-previa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './factura-previa.component.html',
  styleUrls: ['./factura-previa.component.css']
})
export class FacturaPreviaComponent {
  tasaIVA = 0.15;

  constructor(public cart: CartService) {}
}
