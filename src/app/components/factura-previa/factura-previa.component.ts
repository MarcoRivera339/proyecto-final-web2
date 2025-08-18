import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { FacturasService } from '../../services/factura.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-factura-previa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './factura-previa.component.html',
  styleUrls: ['./factura-previa.component.css']
})
export class FacturaPreviaComponent {

  constructor(private http: HttpClient, private servicioUsuario: UsuariosService, private servicioFactura: FacturasService, private router: Router, private ruta: ActivatedRoute) { }

  usuarios: any[] = [];

  ngOnInit() {
    this.servicioUsuario.getUsuarios().subscribe(data => {
      this.usuarios = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }));
    });
  }

}
