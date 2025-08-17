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

  constructor(private ruta: ActivatedRoute, private productosServicio: ProductosService, private router: Router) { }

  id: string = '';
  producto: any = { codigo: 0, nombre: '', descripcion: '', precio: 0, stock: 0, imagen: '' }


  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.id = params["id"];
      this.productosServicio.getProductoById(this.id).subscribe(producto => {
        this.producto = producto;
      })
    })
  }

editarProducto(formulario: any): void {
  const confirmacion = window.confirm('¿Está seguro de guardar los cambios?');

  if (confirmacion) {
    const productoActualizado = { ...formulario.value, id: this.id };
    this.productosServicio.putProducto(this.id, productoActualizado).subscribe({
      next: () => {
        alert('Producto actualizado correctamente.');
        this.router.navigate(['productos']);
      },
      error: (err) => {
        console.error('Error al actualizar producto', err);
        alert('No se pudo actualizar el producto. Revisa la consola.');
      }
    });
  } else {
    alert('Edición cancelada.');
  }
}


}
