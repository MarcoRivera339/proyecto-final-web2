import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories-grid',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories-grid.component.html',
  styleUrls: ['./categories-grid.component.css']
})
export class CategoriesGridComponent {
  items = [
    { name: 'Frutas', color: '#FEE2E2', emoji: '🍎' },
    { name: 'Verduras', color: '#DCFCE7', emoji: '🥦' },
    { name: 'Lácteos', color: '#E0E7FF', emoji: '🧀' },
    { name: 'Bebidas', color: '#FFE4E6', emoji: '🥤' }
  ];
}
