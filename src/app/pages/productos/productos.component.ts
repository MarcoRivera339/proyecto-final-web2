import { Component } from '@angular/core';
import { GaleryComponent } from "../../components/galery/galery.component";
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto';
import { FacturaPreviaComponent } from "../../components/factura-previa/factura-previa.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, GaleryComponent,FacturaPreviaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = [];

  constructor(
    private productosService: ProductosService,
    private cart: CartService
  ) {
    this.productosService.getProductos()
      .subscribe(res => this.productos = res);
  }

  addToCart(p: Producto) {
    this.cart.add({
      id: (p as any).id || p.nombre,
      nombre: p.nombre,
      precio: Number(p.precio),
      cantidad: 1,
      imagen: (p as any).imagen
    });
    alert('Producto agregado al carrito');
  }
}
