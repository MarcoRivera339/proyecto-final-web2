import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-linea-tiempo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linea-tiempo.component.html',
  styleUrls: ['./linea-tiempo.component.css']
})
export class LineaTiempoComponent {
  eventos = [
    { año: 2021, texto: 'Nace la tienda con un catálogo básico.' },
    { año: 2022, texto: 'Se incorpora carrito de compras e IVA.' },
    { año: 2023, texto: 'Protección de rutas con guardianes.' },
    { año: 2024, texto: 'Crecemos en cobertura y catálogo.' }
  ];
}
