import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private servicioProductos: ProductosService, private router: Router,
      private ruta: ActivatedRoute,private http: HttpClient) {
    }

  producto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    imagen: ''
  };

  productoSeleccionado?: Producto;

  mostrarDetalles(p: Producto): void {
    this.productoSeleccionado = p;
  }

}
