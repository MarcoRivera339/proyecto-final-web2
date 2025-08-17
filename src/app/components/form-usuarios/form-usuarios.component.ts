import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-form-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-usuarios.component.html',
  styleUrl: './form-usuarios.component.css'
})
export class FormUsuariosComponent {


  constructor(private usuarioServicio: UsuariosService, private rolServicio: RolService) { }

  cedula: string = '';
  nombre: string = '';
  apellido: string = '';
  direccion: string = '';
  telefono: string = '';
  email: string = '';
  password: string = '';
  rol: string = '';

  guardar = (formulario: any) => {
    this.usuarioServicio.postUsuario(formulario.value).subscribe(() => {
      window.location.reload();
    })
  }
  

}
