import { Component } from '@angular/core';
import { CartaContactoComponent } from '../../components/carta-contacto/carta-contacto.component';
import { NOVEDADESComponent } from "../../components/novedades/novedades.component";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CartaContactoComponent, NOVEDADESComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
