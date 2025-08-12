import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-contacto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cta-contacto.component.html',
  styleUrls: ['./cta-contacto.component.css']
})
export class CtaContactoComponent {}
