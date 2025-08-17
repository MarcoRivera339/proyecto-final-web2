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
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authServicio: AuthService, private router: Router) { }

  login = () => {
  this.authServicio.login(this.email, this.password).subscribe((sesionExitosa) => {
    if (sesionExitosa) {
      const redireccion = localStorage.getItem('redirectUrl') || '/productos';
      localStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redireccion);
    } else {
      this.error = "Usuario o contraseña incorrectos";
    }
  }, error => {
    this.error = "Error al intentar iniciar sesión";
    console.error(error);
  });
}
}