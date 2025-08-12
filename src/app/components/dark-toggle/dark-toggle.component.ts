import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-toggle.component.html',
  styleUrls: ['./dark-toggle.component.css']
})
export class DarkToggleComponent {
  get enabled() { return document.documentElement.classList.contains('dark'); }
  toggle() {
    const el = document.documentElement;
    el.classList.toggle('dark');
    el.style.transition = 'background-color .2s ease, color .2s ease';
  }
}
