import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-clientes',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './form-clientes.component.html',
  styleUrl: './form-clientes.component.css'
})
export class FormClientesComponent {

  constructor(private servicioClientes: ClientesService) { }

  cedula: string = '';
  nombre: string = '';
  apellido: string = '';
  edad: number = 0;
  direccion: string = '';
  imagen: string = '';

  guardarCliente(formulario: any) {
    this.servicioClientes.postCliente(formulario.value).subscribe(() => {
      window.location.reload();
    })

  }

}