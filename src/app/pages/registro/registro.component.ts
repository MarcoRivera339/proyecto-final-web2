import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormClientesComponent } from '../../components/form-clientes/form-clientes.component';
import { EncabezadoRegistroComponent } from '../../components/encabezado-registro/encabezado-registro.component';
import { BeneficiosRegistroComponent } from '../../components/beneficios-registro/beneficios-registro.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, EncabezadoRegistroComponent, FormClientesComponent, BeneficiosRegistroComponent],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {}
