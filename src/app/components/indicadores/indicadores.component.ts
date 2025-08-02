import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-indicadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indicadores.component.html',
  styleUrl: './indicadores.component.css'
})
export class IndicadoresComponent {

  indicadores = [
    {
      img: 'URL_DE_IMAGEN_1', // Usa links de imágenes o assets locales
      valor: '24.769',
      texto: 'Colaboradores'
    },
    {
      img: 'URL_DE_IMAGEN_2',
      valor: '13.981',
      texto: 'Proveedores'
    },
    {
      img: 'URL_DE_IMAGEN_3',
      valor: "3'594.071",
      texto: 'Clientes'
    },
    {
      img: 'URL_DE_IMAGEN_4',
      valor: '20.318',
      texto: 'Total accionistas'
    },
    {
      img: 'URL_DE_IMAGEN_5',
      valor: '335.473',
      texto: 'Empleos Indirectos'
    }
  ];

}
