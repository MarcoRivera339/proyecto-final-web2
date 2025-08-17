import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom, map, Observable } from 'rxjs';
import { UsuariosService } from './usuarios.service';

interface Usuario {
  email: string;
  password: string;
  nombre?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient, private servicioUsuarios: UsuariosService) { }


  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuarios.getUsuarios().pipe(
      map((usuarios: any[]) => {
        const usuarioEncontrado = usuarios.find(c => c.email === email);
        if (usuarioEncontrado && usuarioEncontrado.password === password) {
          localStorage.setItem('user', email);
          return true;
        }
        return false;
      })
    );
  }

  sesionIniciada = () => {
    return localStorage.getItem('user') !== null;
  }

  logout = () => {
    localStorage.removeItem('user');
  }
}
