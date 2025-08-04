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
      img: 'https://images.pexels.com/photos/9304917/pexels-photo-9304917.jpeg', 
      valor: '24.769',
      texto: 'Colaboradores'
    },
    {
      img: 'https://images.pexels.com/photos/9304917/pexels-photo-9304917.jpeg',
      valor: '13.981',
      texto: 'Proveedores'
    },
    {
      img: 'https://images.pexels.com/photos/9304917/pexels-photo-9304917.jpeg',
      valor: "94.071",
      texto: 'Clientes'
    },
    {
      img: 'https://images.pexels.com/photos/9304917/pexels-photo-9304917.jpeg',
      valor: '20.318',
      texto: 'Total accionistas'
    },
    {
      img: 'https://images.pexels.com/photos/9304917/pexels-photo-9304917.jpeg',
      valor: '335.473',
      texto: 'Empleos Indirectos'
    }
  ];

}
