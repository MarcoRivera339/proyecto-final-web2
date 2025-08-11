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
    // Aquí podrías validar usuario/contraseña real si tuvieras backend
    if (this.email && this.password) {
      this.auth.login();
      alert('Sesión iniciada');
      this.router.navigateByUrl('/'); // Redirige al home o donde quieras
    } else {
      alert('Ingrese su correo y contraseña');
    }
  }
}
