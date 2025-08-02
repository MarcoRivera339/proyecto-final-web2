import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../../interfaces/producto';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent {

  productos: any[] = [];
  id:string='';


  constructor(private servicioProductos: ProductosService, private router: Router,
    private ruta: ActivatedRoute) {
  }

  ngOnInit() {
    this.servicioProductos.getProductos().subscribe(data => {
      this.productos = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }));
    });
  }

  eliminarProducto(id: string): void {
    this.servicioProductos.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(producto => producto.id !== id)
    }, error => {
      console.log('no se puede eliminar el producto', error)
    })
  }

}
