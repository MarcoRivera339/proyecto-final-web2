import { Component } from '@angular/core';
import { FormClientesComponent } from "../../components/form-clientes/form-clientes.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, FormClientesComponent],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre = '';
  email = '';
  password = '';
  loading = false;
  error = '';
  ok = '';

  constructor(private auth: AuthService, private router: Router) {}

  registrar() {
    this.error = '';
    this.ok = '';
    if (!this.email || !this.password) {
      this.error = 'Ingrese correo y contraseña';
      return;
    }
    try {
      this.loading = true;
      this.auth.createUser({ nombre: this.nombre, email: this.email, password: this.password });
      this.ok = 'Usuario registrado';
      setTimeout(() => this.router.navigateByUrl('/login'), 800);
    } catch (e: any) {
      this.error = e?.message || 'No se pudo registrar';
    } finally {
      this.loading = false;
    }
  }
}
