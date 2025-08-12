import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  id!: number;
  nombre = '';
  descripcion = '';
  precio: any = '';
  stock: any = '';
  imagen = '';

  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private productos: ProductosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.productos.getProducto(this.id).subscribe({
      next: (p) => {
        this.nombre = p?.nombre ?? '';
        this.descripcion = p?.descripcion ?? '';
        this.precio = p?.precio ?? '';
        this.stock = p?.stock ?? '';
        this.imagen = p?.imagen ?? '';
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el producto';
        this.loading = false;
      }
    });
  }

  guardar() {
    this.error = '';
    const p = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: Number(this.precio),
      stock: Number(this.stock),
      imagen: this.imagen
    };
    if (!p.nombre || isNaN(p.precio) || isNaN(p.stock)) {
      this.error = 'Completa nombre, precio y stock válidos';
      return;
    }
    this.productos.updateProducto(this.id, p).subscribe({
      next: () => {
        alert('Producto actualizado');
        this.router.navigateByUrl('/productos');
      },
      error: () => this.error = 'No se pudo guardar'
    });
  }
}
