import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoContactoComponent } from '../../components/encabezado-contacto/encabezado-contacto.component';
import { FormularioContactoComponent } from '../../components/formulario-contacto/formulario-contacto.component';
import { DatosContactoComponent } from '../../components/datos-contacto/datos-contacto.component';
import { MapaContactoComponent } from '../../components/mapa-contacto/mapa-contacto.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    EncabezadoContactoComponent,
    FormularioContactoComponent,
    DatosContactoComponent,
    MapaContactoComponent
  ],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {}
