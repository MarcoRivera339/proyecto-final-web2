import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactoService, MensajeContacto } from '../../services/contacto.service';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {
  nombre = '';
  email = '';
  asunto = '';
  mensaje = '';
  loading = false;
  ok = '';
  error = '';

  constructor(private contacto: ContactoService) {}

  async enviar() {
    this.ok = ''; this.error = '';
    if (!this.email || !this.mensaje) { this.error = 'Email y mensaje son obligatorios.'; return; }

    this.loading = true;
    const data: MensajeContacto = {
      nombre: this.nombre.trim(),
      email: this.email.trim(),
      asunto: this.asunto.trim(),
      mensaje: this.mensaje.trim()
    };
    try {
      await this.contacto.enviar(data);
      this.ok = 'Mensaje enviado correctamente';
      this.nombre = this.email = this.asunto = this.mensaje = '';
    } catch {
      this.error = 'No se pudo enviar el mensaje. Inténtalo más tarde.';
    } finally {
      this.loading = false;
    }
  }
}
