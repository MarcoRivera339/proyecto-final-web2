import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from '../../components/galery/galery.component';
import { FacturaPreviaComponent } from '../../components/factura-previa/factura-previa.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, GaleryComponent, FacturaPreviaComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {}
