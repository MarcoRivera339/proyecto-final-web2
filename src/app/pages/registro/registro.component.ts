import { Component } from '@angular/core';
import { FormClientesComponent } from "../../components/form-clientes/form-clientes.component";

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormClientesComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

}
