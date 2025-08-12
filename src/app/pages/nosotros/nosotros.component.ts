import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoNosotrosComponent } from '../../components/encabezado-nosotros/encabezado-nosotros.component';
import { MisionVisionComponent } from '../../components/mision-vision/mision-vision.component';
import { ValoresListaComponent } from '../../components/valores-lista/valores-lista.component';
import { EquipoGridComponent } from '../../components/equipo-grid/equipo-grid.component';
import { LineaTiempoComponent } from '../../components/linea-tiempo/linea-tiempo.component';
import { CtaContactoComponent } from '../../components/cta-contacto/cta-contacto.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    CommonModule,
    EncabezadoNosotrosComponent,
    MisionVisionComponent,
    ValoresListaComponent,
    EquipoGridComponent,
    LineaTiempoComponent,
    CtaContactoComponent
  ],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {}
