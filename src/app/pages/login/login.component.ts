import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  iniciarSesion() {
    // Valida que haya email y contraseña (sin backend)
    if (this.email && this.password) {
      // Respetando tu servicio (sin cambiar firmas)
      this.auth.login();

      alert('Sesión iniciada');
      // Requisito: tras login, mostrar productos protegidos
      this.router.navigateByUrl('/productos');
    } else {
      alert('Ingrese su correo y contraseña');
    }
  }
}
