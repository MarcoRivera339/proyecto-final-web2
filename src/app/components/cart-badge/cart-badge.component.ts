import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-badge',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent {
  constructor(public cart: CartService) {}
  get count() { return this.cart.getCount(); }
}
