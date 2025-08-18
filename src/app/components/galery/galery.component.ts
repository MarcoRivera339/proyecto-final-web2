import { Component } from '@angular/core';

import { ProductosService } from '../../services/productos.service';

import { ActivatedRoute, Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CartService } from '../../services/cart.service';

import { HttpClient } from '@angular/common/http';

import { Producto } from '../../interfaces/producto';

@Component({

  selector: 'app-galery',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './galery.component.html',

  styleUrls: ['./galery.component.css']

})

export class GaleryComponent {

  productos: Producto[] = [];

  productosFiltrados: any[] = [];

  filtroNombre: string = '';

  constructor(

    private http: HttpClient,

    private servicioProductos: ProductosService,

    private router: Router,

    private ruta: ActivatedRoute,

    private cart: CartService

  ) { }

  ngOnInit() {

    this.servicioProductos.getProductos().subscribe(data => {

      this.productos = Object.keys(data).map(key => ({

        id: key, ...data[key]

      }));

      this.productosFiltrados = [...this.productos];

    });

  }

  filtrarProductos() {

    const filtro = this.filtroNombre.toLowerCase();

    this.productosFiltrados = this.productos.filter(producto =>

      producto.nombre.toLowerCase().includes(filtro)

    );

  }

  comprar(p: any) {

    this.cart.add({

      id: String(p.id),

      nombre: p.nombre,

      precio: Number(p.precio),

      cantidad: 1,

      imagen: p.imagen

    });

    this.router.navigateByUrl('/factura');

  }

}

