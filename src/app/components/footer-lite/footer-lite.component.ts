import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-lite',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer-lite.component.html',
  styleUrls: ['./footer-lite.component.css']
})
export class FooterLiteComponent {
  currentYear = new Date().getFullYear();
}
