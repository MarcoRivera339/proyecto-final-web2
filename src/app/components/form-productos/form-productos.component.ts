import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-form-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {
  nombre = '';
  descripcion = '';
  precio: any = '';
  stock: any = '';
  imagen = '';

  loading = false;
  error = '';

  constructor(private productos: ProductosService, private router: Router) {}

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
    this.loading = true;
    this.productos.createProducto(p).subscribe({
      next: () => {
        alert('Producto creado');
        this.router.navigateByUrl('/productos');
      },
      error: () => {
        this.error = 'No se pudo guardar';
        this.loading = false;
      }
    });
  }
}
