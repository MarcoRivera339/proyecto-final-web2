import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() searchChanged = new EventEmitter<string>();
  searchTerm: string = '';

  producto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    imagen: ''
  };

  productoSeleccionado?: Producto;

  constructor(private servicioProductos: ProductosService, private router: Router,
      private ruta: ActivatedRoute, private http: HttpClient) {}

  mostrarDetalles(p: Producto): void {
    this.productoSeleccionado = p;
  }

  onSearch() {
    this.searchChanged.emit(this.searchTerm);
  }
}
