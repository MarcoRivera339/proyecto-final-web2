import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DarkToggleComponent } from '../dark-toggle/dark-toggle.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, DarkToggleComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  abierto = false;
  error: string = '';

  constructor(public auth: AuthService, private router: Router) {}

  toggleMenu() {
    this.abierto = !this.abierto;
  }

  closeMenu() {
    this.abierto = false;
  }

  logout = () => {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}