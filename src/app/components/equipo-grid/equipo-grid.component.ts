import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Miembro { nombre: string; rol: string; foto: string; }

@Component({
  selector: 'app-equipo-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo-grid.component.html',
  styleUrls: ['./equipo-grid.component.css']
})
export class EquipoGridComponent {
  equipo: Miembro[] = [
    { nombre: 'Rocío', rol: 'Operaciones', foto: 'https://cdn.pixabay.com/photo/2014/08/05/10/32/girl-410334_1280.jpg' },
    { nombre: 'Yahir', rol: 'Ventas', foto: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg' },
    { nombre: 'Tania', rol: 'Atención al cliente', foto: 'https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg' },
    { nombre: 'Marco', rol: 'Logística', foto: 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg' }
  ];
}
