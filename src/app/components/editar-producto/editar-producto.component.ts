import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {

  constructor(private productosServicio: ProductosService,
    private router: Router,
    private ruta: ActivatedRoute) { }

  id: string = '';
  
  producto: Producto = {
  nombre: '',
  descripcion: '',
  precio: 0,
  stock: 0,
  imagen: ''
};

  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.id = params["id"];
      this.productosServicio.getProductoById(this.id).subscribe(producto => {
        this.producto = producto;
      })
    })
  }

  editarProducto(formulario: any): void {
    const productoActualizado = { ...formulario.value };
    this.productosServicio.putProducto(this.id, productoActualizado).subscribe(() => {
      this.router.navigate(['productos'])
    })
  }

}
