import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {

  constructor(private servicioUsuarios: UsuariosService) { }

  usuarios: any[] = [];

  ngOnInit() {
    this.servicioUsuarios.getUsuarios().subscribe(data => {
      this.usuarios = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }));
    });
  }

  eliminarUsuario(id: string): void {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.servicioUsuarios.deleteUsuario(id).subscribe(() => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
        alert('Usuario eliminado correctamente');
      }, error => {
        console.error('No se puede eliminar el usuario', error);
        alert('Ocurrió un error al eliminar el usuario');
      });
    }
  }


}