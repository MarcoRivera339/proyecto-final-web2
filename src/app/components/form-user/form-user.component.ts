import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  private usuariosServicio = inject(UsuariosService);
  private rolServicio = inject(RolService);

  roles: any[] = [];

  cedula: string = '';
  nombre: string = '';
  apellido: string = '';
  direccion: string = '';
  telefono: string = '';
  email: string = '';
  password: string = '';
  rol: string = '';

  ngOnInit() {
    this.rolServicio.getRoles().subscribe(data => {
      console.log('Roles recibidos:', data);
      this.roles = data.map((r: any) => ({
        id: r.id,
        nombre: r.nombre
      }));
    });
  }


  guardar = (formulario: any) => {
    const usuario = {
      ...formulario.value,
      rol: { id: this.rol }
    };

    this.usuariosServicio.postUsuario(usuario).subscribe(
      () => {
        console.log('Usuario guardado correctamente');
        window.location.reload();
      },
      err => console.error('Error al guardar usuario', err)
    );
  }


}
