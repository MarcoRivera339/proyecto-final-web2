import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private API_USUARIOS = 'http://localhost:8081/usuarios';
  
    constructor(private http: HttpClient) { }
  
    // Guardar usuario
    postUsuario(usuario: any): Observable<any> {
      return this.http.post(`${this.API_USUARIOS}/guardarUsuario`, usuario);
    }
  
    // Listar todos los usuarios
    getUsuarios(): Observable<any> {
      return this.http.get(`${this.API_USUARIOS}`);
    }
  
    // Buscar usuario por ID
    getUsuarioById(id: string): Observable<any> {
      return this.http.get(`${this.API_USUARIOS}/idUsuario/${id}`);
    }
  
    // Buscar usuario por cédula
    getUsuarioByCedula(cedula: string): Observable<any> {
      return this.http.get(`${this.API_USUARIOS}/cedula/${cedula}`);
    }
  
    // Eliminar usuario
    deleteUsuario(id: string): Observable<any> {
      return this.http.delete(`${this.API_USUARIOS}/eliminarUsuario/${id}`);
    }
  
    // Actualizar usuario
    putUsuario(id: string, usuario: any): Observable<any> {
      return this.http.put(`${this.API_USUARIOS}/editarUsuario/${id}`, usuario);
    }
}
