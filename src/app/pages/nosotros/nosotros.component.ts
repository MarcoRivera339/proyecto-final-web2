import { Component } from '@angular/core';
import { IndicadoresComponent } from "../../components/indicadores/indicadores.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [IndicadoresComponent, CardComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
