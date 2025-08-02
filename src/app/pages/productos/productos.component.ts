import { Component } from '@angular/core';
import { GaleryComponent } from "../../components/galery/galery.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [GaleryComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
