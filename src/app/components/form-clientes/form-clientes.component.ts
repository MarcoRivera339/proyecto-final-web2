import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-form-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent {
  nombre = '';
  telefono = '';
  direccion = '';
  email = '';
  password = '';
  loading = false;
  error = '';
  ok = '';

  constructor(private auth: AuthService, private router: Router) {}

  async guardarCliente() {
    this.error = '';
    this.ok = '';

    if (!this.email || !this.password) {
      this.error = 'Ingrese correo y contraseña';
      return;
    }

    this.loading = true;
    try {
      await this.auth.createUserApi({ nombre: this.nombre, email: this.email, password: this.password });
      this.ok = 'Usuario registrado correctamente';
      this.router.navigateByUrl('/login');
    } catch (apiErr: any) {
      // Fallback local solo si el server no está
      if (String(apiErr?.message || '').includes('No se pudo conectar')) {
        try {
          this.auth.createUser({ nombre: this.nombre, email: this.email, password: this.password });
          this.ok = 'Usuario registrado (local)';
          this.router.navigateByUrl('/login');
        } catch (locErr: any) {
          this.error = locErr?.message || 'No se pudo registrar (local).';
        }
      } else {
        this.error = apiErr?.message || 'No se pudo registrar.';
      }
    } finally {
      this.loading = false;
    }
  }
}
