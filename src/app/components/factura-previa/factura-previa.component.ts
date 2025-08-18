import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CartService } from '../../services/cart.service';

import { FacturasService } from '../../services/factura.service';

import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';

import { UsuariosService } from '../../services/usuarios.service';

import { AuthService } from '../../services/auth.service';

import { CartItem } from '../../interfaces/cart-item';
 
@Component({

  selector: 'app-factura-previa',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './factura-previa.component.html',

  styleUrls: ['./factura-previa.component.css']

})

export class FacturaPreviaComponent {

  constructor(

    private http: HttpClient,

    private servicioUsuario: UsuariosService,

    private servicioFactura: FacturasService,

    private router: Router,

    private ruta: ActivatedRoute,

    private auth: AuthService,

    private cart: CartService

  ) {}
 
  usuarios: any[] = [];

  nombreUsuario: string = '';

  emailUsuario: string | null = null;
 
  numeroFactura: string = '';
 
  items: CartItem[] = [];

  subtotal = 0;

  iva = 0;

  total = 0;

  readonly tasaIVA = 0.15;
 
  guardando = false;
 
  ngOnInit() {

    // usuario

    this.emailUsuario = localStorage.getItem('user');

    this.servicioUsuario.getUsuarios().subscribe(data => {

      const lista = Array.isArray(data)

        ? data

        : Object.keys(data).map(key => ({ id: key, ...data[key] }));

      this.usuarios = lista;

      if (this.emailUsuario) {

        const u = lista.find((x: any) => x.email === this.emailUsuario);

        this.nombreUsuario = (u && (u.nombre ?? u.nombres)) || '';

      }

    });
 
    // número de factura

    this.cargarNumeroFactura();
 
    // carrito

    this.cargarCarrito();

  }
 
  private async cargarNumeroFactura() {

    try {

      const lista = await this.servicioFactura.getAll();

      const siguiente = (lista?.length ?? 0) + 1;

      this.numeroFactura = this.formatearNumero(siguiente);

    } catch {

      const local = Number(localStorage.getItem('numFactura') || '0') + 1;

      localStorage.setItem('numFactura', String(local));

      this.numeroFactura = this.formatearNumero(local);

    }

  }
 
  private cargarCarrito() {

    this.items = this.cart.getItems();

    this.subtotal = this.cart.getSubtotal();

    this.iva = this.cart.getIVA(this.tasaIVA);

    this.total = this.cart.getTotal(this.tasaIVA);

  }
 
  async guardarFactura() {

    if (this.items.length === 0 || this.guardando) return;

    this.guardando = true;

    try {

      await this.servicioFactura.crear(this.items, this.subtotal, this.iva, this.total);

    } finally {

      // limpiar carrito y recalcular

      this.cart.clear();

      this.cargarCarrito();

      await this.cargarNumeroFactura();

      this.guardando = false;

    }

  }
 
  private formatearNumero(n: number): string {

    return n.toString().padStart(9, '0');

  }

}

 