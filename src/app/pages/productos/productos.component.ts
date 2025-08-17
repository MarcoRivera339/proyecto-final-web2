import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from '../../components/galery/galery.component';
import { FacturaPreviaComponent } from '../../components/factura-previa/factura-previa.component';
import { EditarProductoComponent } from "../../components/editar-producto/editar-producto.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, GaleryComponent, FacturaPreviaComponent, EditarProductoComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {}
