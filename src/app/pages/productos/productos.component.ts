import { Component } from '@angular/core';
import { GaleryComponent } from "../../components/galery/galery.component";
import { SearchComponent } from "../../components/search/search.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [GaleryComponent, SearchComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
