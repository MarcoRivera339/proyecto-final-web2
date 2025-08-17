import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-form-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {

  constructor(private productosService: ProductosService) { }

  codigo: number = 0;
  nombre: string = '';
  descripcion: string = '';
  precio: number = 0;
  stock: number = 0;
  imagen: string = '';

  guardar = (formulario: any) => {
    this.productosService.postProducto(formulario.value).subscribe(() => {
      window.location.reload();
    })
  }
}
