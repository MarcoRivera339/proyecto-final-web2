import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-form-productos',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './form-productos.component.html',
  styleUrl: './form-productos.component.css'
})
export class FormProductosComponent {

  constructor(private servicioProductos: ProductosService) { }

  nombre: string = '';
  descripcion: string = '';
  precio: number = 0;
  stock: string = '';
  imagen: string = '';

  guardarProducto(formulario: any) {
    this.servicioProductos.postProductos(formulario.value).subscribe(() => {
      window.location.reload();
    })

  }

}
