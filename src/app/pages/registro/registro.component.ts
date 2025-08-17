import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoRegistroComponent } from '../../components/encabezado-registro/encabezado-registro.component';
import { BeneficiosRegistroComponent } from '../../components/beneficios-registro/beneficios-registro.component';
import { FormUserComponent } from '../../components/form-user/form-user.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, EncabezadoRegistroComponent, BeneficiosRegistroComponent, FormUserComponent],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {}
