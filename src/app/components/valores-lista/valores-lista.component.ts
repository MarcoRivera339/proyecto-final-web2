import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valores-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valores-lista.component.html',
  styleUrls: ['./valores-lista.component.css']
})
export class ValoresListaComponent {
  valores = [
    { icon: '🤝', titulo: 'Confianza', desc: 'Relaciones transparentes con clientes y proveedores.' },
    { icon: '⚙️', titulo: 'Eficiencia', desc: 'Procesos ágiles: selección, carrito y facturación.' },
    { icon: '🛡️', titulo: 'Seguridad', desc: 'Accesos protegidos con guardianes de rutas.' },
    { icon: '🌿', titulo: 'Calidad', desc: 'Productos frescos y controlados.' }
  ];
}
