import { Component, NgModule } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent {

  productos: any[] = [];
  id: string = '';
  productosFiltrados: any[] = [];
  filtroNombre: string = '';


  constructor(private servicioProductos: ProductosService, private router: Router,
    private ruta: ActivatedRoute) {
  }

  ngOnInit() {
    this.servicioProductos.getProductos().subscribe(data => {
      this.productos = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }));
      this.productosFiltrados = [...this.productos];
    });
  }

  eliminarProducto(id: string): void {
    this.servicioProductos.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(producto => producto.id !== id)
    }, error => {
      console.log('no se puede eliminar el producto', error)
    })
  }

  filtrarProductos() {
    const filtro = this.filtroNombre.toLowerCase();
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(filtro)
    );
  }

}