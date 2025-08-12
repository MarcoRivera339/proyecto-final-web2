import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {
  productos: any[] = [];
  id: string = '';
  productosFiltrados: any[] = [];
  filtroNombre: string = '';

  constructor(
    private servicioProductos: ProductosService,
    private cart: CartService,
    private router: Router,
    private ruta: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servicioProductos.getProductos().subscribe((data: any) => {
      if (Array.isArray(data)) {
        this.productos = data;
      } else if (data && typeof data === 'object') {
        const obj = data as Record<string, any>;
        this.productos = Object.entries(obj).map(([key, value]) => ({
          id: key,
          ...(value as any)
        }));
      } else {
        this.productos = [];
      }
      this.productosFiltrados = [...this.productos];
    });
  }

  eliminarProducto(id: string | number): void {
    this.servicioProductos.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(p => String(p.id) !== String(id));
      this.filtrarProductos();
    });
  }

  filtrarProductos() {
    const filtro = (this.filtroNombre || '').toLowerCase();
    this.productosFiltrados = this.productos.filter(p =>
      (p?.nombre || '').toLowerCase().includes(filtro)
    );
  }

  addCart(producto: any) {
    this.cart.add({
      id: producto.id || producto.nombre,
      nombre: producto.nombre,
      precio: Number(producto.precio),
      cantidad: 1,
      imagen: producto.imagen
    });
    alert('Producto agregado al carrito');
  }
}
